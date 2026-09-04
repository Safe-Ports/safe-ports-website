import { resolve } from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: process.env.GITHUB_ACTIONS ? "/safe-ports-website/" : "/",
  plugins: [react()],
  build: {
    sourcemap: false,
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        hub: resolve(__dirname, "hub.html"),
        lands: resolve(__dirname, "lands.html"),
        properties: resolve(__dirname, "properties.html"),
        construction: resolve(__dirname, "construction.html"),
      },
    },
  },
});
