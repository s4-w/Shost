import fs from "fs";
import path from "path";
import React from "react";
import { renderToString } from "react-dom/server";
import App from "../src/App";
import { SEO_DATA } from "../src/data/seoData";

const distDir = path.join(process.cwd(), "dist");
const templatePath = path.join(distDir, "index.html");

export async function prerender() {
  if (!fs.existsSync(templatePath)) {
    console.log("No dist/index.html found to prerender. Run 'vite build' first.");
    return;
  }

  const template = fs.readFileSync(templatePath, "utf-8");
  console.log("Starting static HTML prerendering for all routes...");

  for (const [route, meta] of Object.entries(SEO_DATA)) {
    try {
      // Render React component tree to string
      const appHtml = renderToString(React.createElement(App, { initialPath: route }));

      // Customize metadata in the template for this specific route
      let html = template;

      // Replace title
      html = html.replace(/<title>[\s\S]*?<\/title>/i, `<title>${meta.title}</title>`);

      // Replace meta description
      html = html.replace(
        /<meta\s+name="description"\s+content="[\s\S]*?"\s*\/?>/i,
        `<meta name="description" content="${meta.description}" />`
      );

      // Replace canonical link
      html = html.replace(
        /<link\s+rel="canonical"\s+href="[\s\S]*?"\s*\/?>/i,
        `<link rel="canonical" href="${meta.canonical}" />`
      );

      // Replace Open Graph title and description
      html = html.replace(
        /<meta\s+property="og:title"\s+content="[\s\S]*?"\s*\/?>/i,
        `<meta property="og:title" content="${meta.title}" />`
      );
      html = html.replace(
        /<meta\s+property="og:description"\s+content="[\s\S]*?"\s*\/?>/i,
        `<meta property="og:description" content="${meta.description}" />`
      );
      html = html.replace(
        /<meta\s+property="og:url"\s+content="[\s\S]*?"\s*\/?>/i,
        `<meta property="og:url" content="${meta.canonical}" />`
      );

      // Inject rendered app HTML into root div
      html = html.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);

      // Determine output file path
      let outFilePath = templatePath;
      if (route === "/") {
        outFilePath = templatePath;
      } else {
        const routeDir = path.join(distDir, route.replace(/^\//, ""));
        if (!fs.existsSync(routeDir)) {
          fs.mkdirSync(routeDir, { recursive: true });
        }
        outFilePath = path.join(routeDir, "index.html");
      }

      fs.writeFileSync(outFilePath, html, "utf-8");
      console.log(`✓ Pre-rendered: ${route} -> ${path.relative(distDir, outFilePath)}`);
    } catch (err) {
      console.error(`Error prerendering route ${route}:`, err);
    }
  }

  console.log("Static HTML prerendering completed successfully!");
}

if (process.argv[1]?.endsWith("prerender.ts")) {
  prerender();
}
