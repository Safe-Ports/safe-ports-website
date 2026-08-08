import { createReadStream, existsSync, statSync } from "node:fs";
import { createServer } from "node:http";
import { extname, join, normalize } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(fileURLToPath(new URL(".", import.meta.url)), "dist");
const port = Number.parseInt(process.env.PORT || "3000", 10);
const types = { ".css": "text/css; charset=utf-8", ".html": "text/html; charset=utf-8", ".ico": "image/x-icon", ".js": "text/javascript; charset=utf-8", ".json": "application/json", ".png": "image/png", ".svg": "image/svg+xml", ".webp": "image/webp" };

if (!existsSync(join(root, "index.html"))) throw new Error("Missing dist/index.html. Run npm run build first.");

createServer((request, response) => {
  if (request.url === "/health") {
    response.writeHead(200, { "Content-Type": "application/json", "Cache-Control": "no-store" });
    return response.end('{"status":"ok"}');
  }

  const pathname = decodeURIComponent(new URL(request.url, "http://localhost").pathname);
  const requested = normalize(join(root, pathname));
  const safePath = requested.startsWith(root) && existsSync(requested) && statSync(requested).isFile()
    ? requested
    : join(root, "index.html");
  const extension = extname(safePath);
  response.writeHead(200, {
    "Content-Type": types[extension] || "application/octet-stream",
    "Cache-Control": extension === ".html" ? "no-cache" : "public, max-age=31536000, immutable",
    "X-Content-Type-Options": "nosniff",
    "Referrer-Policy": "strict-origin-when-cross-origin",
  });
  createReadStream(safePath).pipe(response);
}).listen(port, "0.0.0.0", () => console.log(`Safe Ports listening on ${port}`));
