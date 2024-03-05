import express from "express";
import uiServer from "~/ui/index.js";

const server = express();
server.enable("trust proxy");
server.set("json spaces", 2);

// Astro-powered UI server
server.use(uiServer);

const port = 8080;
const { url } = await listen(server, port);
console.log(`Server running at ${url}`);

async function listen(app, port) {
  return new Promise((resolve) => {
    const listener = app.listen(port, "localhost", function () {
      const { port } = listener.address();
      const url = `http://localhost:${port}`;
      resolve({
        url,
        port,
      });
    });
  });
}
