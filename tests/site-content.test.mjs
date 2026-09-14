import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import { publicProducts } from "../src/data/publicProducts.js";

const projectFiles = [
  "src/App.jsx",
  "src/Hub.jsx",
  "src/ProductLanding.jsx",
  "index.html",
  "hub.html",
  "lands.html",
  "properties.html",
  "construction.html",
];

test("public product catalog matches the audited frontend states", () => {
  assert.deepEqual(
    Object.fromEntries(publicProducts.map(({ key, status }) => [key, status])),
    {
      lands: "implemented",
      properties: "prototype",
      construction: "exploration",
    },
  );
});

test("active website surfaces do not restore retired or unsupported claims", async () => {
  const source = (await Promise.all(projectFiles.map((file) => readFile(file, "utf8")))).join("\n");
  for (const forbidden of [
    /Neighborhoods/i,
    /Own Terra Homes/i,
    /PRODUCTO LISTO/i,
    /PRODUCT READY/i,
    /ownterra-app-dev/i,
    /dev\.own-terra/i,
    /Construction[^\n]{0,80}(Activo|Active)/i,
  ]) {
    assert.doesNotMatch(source, forbidden);
  }
});

test("preview and exploration disclosures remain explicit", async () => {
  const properties = await readFile("properties.html", "utf8");
  const construction = await readFile("construction.html", "utf8");
  const productLanding = await readFile("src/ProductLanding.jsx", "utf8");

  assert.match(properties, /Vista previa funcional/);
  assert.match(construction, /Exploración/);
  assert.match(construction, /No es una vertical operativa/);
  assert.doesNotMatch(productLanding, /construction:[\s\S]*?appPath:\s*["']/);
});

test("every public page declares the branded social image", async () => {
  for (const file of projectFiles.filter((name) => name.endsWith(".html"))) {
    const html = await readFile(file, "utf8");
    assert.match(html, /property="og:image" content="%VITE_SITE_URL%\/og\.png"/);
    assert.match(html, /name="twitter:image" content="%VITE_SITE_URL%\/og\.png"/);
  }
});
