import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import fs from "fs";
import { Resend } from "resend";
import { SEO_DATA } from "./src/data/seoData";

const app = express();
const PORT = Number(process.env.PORT) || 3000;

// Trust proxy for secure headers & IP detection behind Cloud Run / Load Balancers
app.set("trust proxy", true);

// -------------------------------------------------------------
// 1. Security Headers & HTTPS Enforcement Middleware
// -------------------------------------------------------------
app.use((req, res, next) => {
  // HTTPS enforcement in production
  if (
    process.env.NODE_ENV === "production" &&
    req.headers["x-forwarded-proto"] &&
    req.headers["x-forwarded-proto"] !== "https"
  ) {
    return res.redirect(301, `https://${req.headers.host}${req.url}`);
  }

  // Security Headers
  res.setHeader("Strict-Transport-Security", "max-age=31536000; includeSubDomains; preload");
  res.setHeader("X-Content-Type-Options", "nosniff");
  res.setHeader("X-Frame-Options", "DENY");
  res.setHeader("Referrer-Policy", "strict-origin-when-cross-origin");
  res.setHeader("Permissions-Policy", "camera=(), microphone=(), geolocation=(), payment=()");
  res.setHeader(
    "Content-Security-Policy",
    "default-src 'self'; script-src 'self' 'unsafe-inline' https://calendly.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com data:; img-src 'self' data: https:; connect-src 'self' https://script.google.com https://script.googleusercontent.com; frame-src https://calendly.com;"
  );

  next();
});

app.use(express.json({ limit: "50kb" }));

// -------------------------------------------------------------
// 2. Anti-Spam Rate Limiter (In-Memory per IP)
// -------------------------------------------------------------
const ipRequestHistory = new Map<string, number[]>();

function rateLimitContact(req: express.Request, res: express.Response, next: express.NextFunction) {
  const ip = req.ip || req.socket.remoteAddress || "unknown";
  const now = Date.now();
  const windowMs = 10 * 60 * 1000; // 10 minutes
  const maxRequests = 5;

  const timestamps = (ipRequestHistory.get(ip) || []).filter((time) => now - time < windowMs);

  if (timestamps.length >= maxRequests) {
    return res.status(429).json({
      error: "Trop de demandes envoyées depuis cette adresse. Veuillez patienter quelques minutes.",
    });
  }

  timestamps.push(now);
  ipRequestHistory.set(ip, timestamps);
  next();
}

// Lazy Resend Client
let resend: Resend | null = null;
const getResend = () => {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return null;
  if (!resend) resend = new Resend(apiKey);
  return resend;
};

// -------------------------------------------------------------
// 3. API Route for Contact & Revenue Estimate
// -------------------------------------------------------------
app.post("/api/contact", rateLimitContact, async (req, res) => {
  const { name, email, phone, city, propertyType, message, source, consentRgpd, honeypot, formStartedAt } = req.body;

  // 1. Bot Traps
  if (honeypot && String(honeypot).trim() !== "") {
    // Silently succeed for bots
    return res.json({ success: true, message: "OK" });
  }

  if (formStartedAt && Date.now() - Number(formStartedAt) < 1500) {
    return res.status(400).json({ error: "Soumission suspecte (trop rapide)." });
  }

  // 2. Sanitization & Validation
  const cleanName = String(name || "").trim().slice(0, 100);
  const cleanEmail = String(email || "").trim().slice(0, 120);
  const cleanPhone = String(phone || "").trim().slice(0, 30);
  const cleanCity = String(city || "Grenoble").trim().slice(0, 100);
  const cleanType = String(propertyType || "Non spécifié").trim().slice(0, 100);
  const cleanMessage = String(message || "").trim().slice(0, 2000);

  if (!cleanName || !cleanEmail || !cleanPhone || !cleanMessage) {
    return res.status(400).json({ error: "Tous les champs obligatoires doivent être renseignés." });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(cleanEmail)) {
    return res.status(400).json({ error: "Format d'adresse e-mail invalide." });
  }

  if (!consentRgpd) {
    return res.status(400).json({ error: "Le consentement au traitement des données est obligatoire." });
  }

  // 3. Forward to Google Apps Script Form (SHOST Spreadsheet)
  const GOOGLE_SCRIPT_URL =
    "https://script.google.com/macros/s/AKfycbzXCEisWvz0rEikh_JPHufMZL3PnuRIds63DAoqKcfuEanh0gxeF-nj-NZ9Utb_lL5R/exec";

  let googleSuccess = false;
  try {
    const googleResponse = await fetch(GOOGLE_SCRIPT_URL, {
      method: "POST",
      headers: { "Content-Type": "text/plain" },
      body: JSON.stringify({
        nom: cleanName,
        email: cleanEmail,
        telephone: cleanPhone,
        ville: cleanCity,
        typeBien: cleanType,
        message: cleanMessage,
        source: source || "Site Web SHOST",
        date: new Date().toISOString(),
      }),
    });
    googleSuccess = googleResponse.ok || googleResponse.status === 200 || googleResponse.type === "opaque";
  } catch (err) {
    console.warn("Could not forward to Google Apps Script:", err);
  }

  // 4. Send notification via Resend if key is available
  try {
    const client = getResend();
    if (client) {
      await client.emails.send({
        from: "SHOST Contact <onboarding@resend.dev>",
        to: ["shost.services@gmail.com"],
        subject: `Nouveau lead SHOST: ${cleanName} (${cleanCity} - ${cleanType})`,
        html: `
          <h2>Nouvelle demande d'estimation / contact reçue</h2>
          <p><strong>Nom :</strong> ${cleanName}</p>
          <p><strong>Email :</strong> <a href="mailto:${cleanEmail}">${cleanEmail}</a></p>
          <p><strong>Téléphone :</strong> <a href="tel:${cleanPhone}">${cleanPhone}</a></p>
          <p><strong>Ville / Secteur :</strong> ${cleanCity}</p>
          <p><strong>Type de bien :</strong> ${cleanType}</p>
          <p><strong>Message :</strong></p>
          <blockquote style="background:#f4f4f4;padding:12px;border-left:3px solid #c5a059;">${cleanMessage.replace(/\n/g, "<br>")}</blockquote>
          <hr />
          <p><small>Consentement RGPD vérifié le ${new Date().toLocaleString("fr-FR")}</small></p>
        `,
      });
    }
  } catch (emailErr) {
    console.error("Resend notification error:", emailErr);
  }

  return res.json({
    success: true,
    message: "Votre demande a bien été prise en compte.",
    googleSent: googleSuccess,
  });
});

// -------------------------------------------------------------
// 4. Server Start & Static / Pre-rendered HTML Serving
// -------------------------------------------------------------
async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath, { index: false }));

    // Pre-rendered HTML serving for clean URLs & bots
    app.get("*", (req, res) => {
      const cleanUrl = req.path.replace(/^\//, "").replace(/\/$/, "");
      const possibleFile = cleanUrl ? path.join(distPath, cleanUrl, "index.html") : path.join(distPath, "index.html");

      if (fs.existsSync(possibleFile)) {
        return res.sendFile(possibleFile);
      }

      // Fallback: If route exists in SEO_DATA, inject metadata into root index.html
      const rootHtmlPath = path.join(distPath, "index.html");
      const normalizedPath = "/" + cleanUrl;
      const meta = SEO_DATA[normalizedPath] || SEO_DATA["/404"];

      if (meta && fs.existsSync(rootHtmlPath)) {
        let html = fs.readFileSync(rootHtmlPath, "utf-8");
        html = html.replace(/<title>[\s\S]*?<\/title>/i, `<title>${meta.title}</title>`);
        html = html.replace(/<meta\s+name="description"\s+content="[\s\S]*?"\s*\/?>/i, `<meta name="description" content="${meta.description}" />`);
        html = html.replace(/<link\s+rel="canonical"\s+href="[\s\S]*?"\s*\/?>/i, `<link rel="canonical" href="${meta.canonical}" />`);
        html = html.replace(/<meta\s+property="og:title"\s+content="[\s\S]*?"\s*\/?>/i, `<meta property="og:title" content="${meta.title}" />`);
        html = html.replace(/<meta\s+property="og:description"\s+content="[\s\S]*?"\s*\/?>/i, `<meta property="og:description" content="${meta.description}" />`);
        html = html.replace(/<meta\s+property="og:url"\s+content="[\s\S]*?"\s*\/?>/i, `<meta property="og:url" content="${meta.canonical}" />`);
        html = html.replace(/<meta\s+(?:name|property)="twitter:title"\s+content="[\s\S]*?"\s*\/?>/i, `<meta name="twitter:title" content="${meta.title}" />`);
        html = html.replace(/<meta\s+(?:name|property)="twitter:description"\s+content="[\s\S]*?"\s*\/?>/i, `<meta name="twitter:description" content="${meta.description}" />`);
        html = html.replace(/<meta\s+(?:name|property)="twitter:url"\s+content="[\s\S]*?"\s*\/?>/i, `<meta name="twitter:url" content="${meta.canonical}" />`);
        return res.send(html);
      }

      res.sendFile(rootHtmlPath);
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`SHOST Server running on http://localhost:${PORT}`);
  });
}

startServer();
