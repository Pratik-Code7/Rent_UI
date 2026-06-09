import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig(({ command }) => ({
  plugins: [react(), tailwindcss()],
  // Use the GitHub Pages sub-path only for production builds.
  // Dev/preview is served from the root so it loads correctly here.
  base: command = "/",
  server: {
    hmr: true,
    watch: {
      usePolling: true,
      interval: 100,
    },
  },
}));
