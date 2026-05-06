import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import { Resend } from "resend";

const app = express();
const PORT = Number(process.env.PORT) || 3000;

// Initialize Resend lazily
let resend: Resend | null = null;
const getResend = () => {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("CRITICAL: RESEND_API_KEY is missing. Please add it to your Environment Variables in Settings.");
    return null;
  }
  if (!resend) {
    resend = new Resend(apiKey);
  }
  return resend;
};

app.use(express.json());

// API route for contact form
app.post("/api/contact", async (req, res) => {
  const { name, email, phone, city, message, source } = req.body;

  try {
    const client = getResend();
    if (!client) {
      return res.status(503).json({ 
        error: "Le service d'email n'est pas configuré. Veuillez contacter l'administrateur pour ajouter la clé RESEND_API_KEY." 
      });
    }
    const { data, error } = await client.emails.send({
      from: "SHOST Contact <onboarding@resend.dev>",
      to: ["shost.services@gmail.com"],
      subject: `Nouveau message de ${name} (${source || 'Contact'})`,
      html: `
        <h2>Nouveau contact reçu depuis le site SHOST</h2>
        <p><strong>Nom :</strong> ${name}</p>
        <p><strong>Email :</strong> ${email}</p>
        <p><strong>Téléphone :</strong> ${phone}</p>
        <p><strong>Ville :</strong> ${city}</p>
        <p><strong>Message :</strong></p>
        <p>${message}</p>
        <hr />
        <p>Source: ${source || 'Formulaire de contact'}</p>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return res.status(400).json({ error: error.message });
    }

    res.json({ success: true, data });
  } catch (err: any) {
    console.error("Server error:", err);
    res.status(500).json({ error: err.message || "Failed to send email" });
  }
});

// Vite middleware for development
async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
