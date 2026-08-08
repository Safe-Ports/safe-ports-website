import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: process.env.GITHUB_ACTIONS ? "/safe-ports-website/" : "/",
  plugins: [react()],
  build: {
    sourcemap: false,
  },
});
