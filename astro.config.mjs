// @ts-check
import { defineConfig, fontProviders } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

const geist = (/** @type {400 | 500} */ weight) => ({
  weight,
  style: /** @type {const} */ ("normal"),
  src: /** @type {[string]} */ ([
    `@fontsource/geist-sans/files/geist-sans-latin-${weight}-normal.woff2`,
  ]),
});

export default defineConfig({
  site: "https://stefankanazir.dev",
  integrations: [sitemap()],
  build: {
    // One small stylesheet: inline it to skip a render-blocking request.
    inlineStylesheets: "always",
  },
  vite: {
    plugins: [tailwindcss()],
  },
  fonts: [
    {
      provider: fontProviders.local(),
      name: "Geist",
      cssVariable: "--font-geist",
      options: { variants: [geist(400), geist(500)] },
      fallbacks: ["ui-sans-serif", "system-ui", "sans-serif"],
    },
  ],
});
