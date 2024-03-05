import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import express from "express";

const DEVELOPMENT = (process.env.NODE_ENV !== "production");
const __dirname = dirname(fileURLToPath(import.meta.url));

const server = express();
export default server;
const astroHandlers = startAstro();

// serve Astro's static assets
server.use(async function (req, res, next) {
  const { staticHandler } = await astroHandlers;
  staticHandler(req, res, next);
});

// serve Astro's SSR pages and endpoints
server.use(async function (req, res, next) {
  const { ssrHandler } = await astroHandlers;
  const { locals } = res;
  ssrHandler(req, res, next, locals);
});

async function startAstro() {
  if (DEVELOPMENT) {
    const { build } = await import("astro");
    await build({
      root: __dirname,
      mode: "development",
    });
  }
  
  const staticPath = resolve(__dirname, "./dist/client/");
  return {
    staticHandler: express.static(staticPath),
    ssrHandler: (await import("./dist/server/entry.mjs")).handler,
  };
}
