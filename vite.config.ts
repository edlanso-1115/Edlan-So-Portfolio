import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  root: path.resolve(__dirname, "client"), // 👈 index.html is here
  base: "/Edlan-So-Portfolio/",            // 👈 GitHub Pages repo name
  plugins: [react(), tailwindcss()],
  build: {
    outDir: path.resolve(__dirname, "dist"), // 👈 output here
    emptyOutDir: true,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "client", "src"),
      "@shared": path.resolve(__dirname, "shared"),
    },
  },
});