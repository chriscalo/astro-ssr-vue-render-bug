import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "astro/config";
import node from "@astrojs/node";
import vue from "@astrojs/vue";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// https://astro.build/config
export default defineConfig({
  srcDir: "./",
  output: "server",
  adapter: node({
    // See https://docs.astro.build/en/guides/integrations-guide/node/#mode
    mode: "middleware",
  }),
  integrations: [
    vue(),
  ],
  vite: {
    resolve: {
      alias: {
        "!": resolve(__dirname, "./"),
        "~": resolve(__dirname, "../"),
      },
    },
    plugins: [],
  },
});
