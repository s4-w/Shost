import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import fs from "fs";
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

  // Security Headers (iframe-compatible for AI Studio preview; X-Frame-Options & frame-ancestors are enforced in public/_headers, vercel.json & netlify.toml)
  res.setHeader("Strict-Transport-Security", "max-age=31536000; includeSubDomains; preload");
  res.setHeader("X-Content-Type-Options", "nosniff");
  res.setHeader("Referrer-Policy", "strict-origin-when-cross-origin");
  res.setHeader("Permissions-Policy", "camera=(), microphone=(), geolocation=(), payment=()");
  res.setHeader(
    "Content-Security-Policy",
    "default-src 'self'; script-src 'self' https://calendly.com; style-src 'self' 'unsafe-inline'; font-src 'self' data:; img-src 'self' data: https:; connect-src 'self' https://script.google.com https://script.googleusercontent.com; frame-src https://calendly.com;"
  );

  next();
});

// -------------------------------------------------------------
// 2. Server Start & Static / Pre-rendered HTML Serving
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
