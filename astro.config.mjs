import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";

import { SITE } from "./src/site";
import { htmlMinifier } from "./src/scripts/htmlMinifier.mjs";

// https://astro.build/config
export default defineConfig({
  site: SITE.url,
  prefetch: true,
  integrations: [sitemap(), htmlMinifier()],
  experimental: {
    clientPrerender: true,
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
