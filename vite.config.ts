import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import fs from "fs";
import type { Plugin } from "vite";
import { componentTagger } from "lovable-tagger";

function attrEscape(value: string): string {
  return value.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");
}

/** Tras el build, genera dist/alquiler-pro/index.html con OG/Twitter meta para compartir en WhatsApp (sin ejecutar JS). */
function alquilerProShareHtmlPlugin(siteUrl: string): Plugin {
  const shareTitle = "Catálogo de Alquiler para Profesionales - Jesús Ortiz";
  const shareDesc =
    "Alquiler de maquinaria para construcción, trabajos agrícolas y particulares.";
  const ogImage = `${siteUrl}/alquiler-pro-hero-web.png?v=8`;
  const canonical = `${siteUrl}/alquiler-pro`;

  return {
    name: "alquiler-pro-share-html",
    closeBundle() {
      const indexPath = path.resolve(__dirname, "dist/index.html");
      if (!fs.existsSync(indexPath)) return;

      let html = fs.readFileSync(indexPath, "utf-8");

      html = html.replace(/<title>[^<]*<\/title>/, `<title>${attrEscape(shareTitle)}</title>`);

      html = html.replace(/<meta\s+name="description"\s+content="[^"]*"\s*\/?>\s*/i, "");

      html = html.replace(/<meta\s+property="og:[^"]+"[^>]*>\s*/gi, "");
      html = html.replace(/<meta\s+name="twitter:[^"]+"[^>]*>\s*/gi, "");
      html = html.replace(/<link\s+rel="image_src"[^>]*>\s*/gi, "");
      html = html.replace(/<link\s+rel="canonical"[^>]*>\s*/gi, "");

      const inject = `
    <meta name="description" content="${attrEscape(shareDesc)}" />
    <meta property="og:title" content="${attrEscape(shareTitle)}" />
    <meta property="og:description" content="${attrEscape(shareDesc)}" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="${attrEscape(canonical)}" />
    <meta property="og:locale" content="es_ES" />
    <meta property="og:image" content="${attrEscape(ogImage)}" />
    <meta property="og:image:secure_url" content="${attrEscape(ogImage)}" />
    <meta property="og:image:type" content="image/png" />
    <meta property="og:image:alt" content="${attrEscape(shareTitle)}" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${attrEscape(shareTitle)}" />
    <meta name="twitter:description" content="${attrEscape(shareDesc)}" />
    <meta name="twitter:image" content="${attrEscape(ogImage)}" />
    <link rel="canonical" href="${attrEscape(canonical)}" />`;

      html = html.replace(
        /(<meta\s+name="viewport"\s+content="[^"]*"\s*\/?>)/i,
        `$1${inject}`,
      );

      const outDir = path.resolve(__dirname, "dist/alquiler-pro");
      fs.mkdirSync(outDir, { recursive: true });
      fs.writeFileSync(path.join(outDir, "index.html"), html, "utf-8");
    },
  };
}

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  const siteUrl = (env.VITE_SITE_URL || "https://construccionesyserviciosortiz.com").replace(/\/$/, "");

  return {
    server: {
      host: "::",
      port: 8080,
      hmr: {
        overlay: false,
      },
    },
    plugins: [
      react(),
      mode === "development" && componentTagger(),
      alquilerProShareHtmlPlugin(siteUrl),
    ].filter(Boolean),
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  };
});
