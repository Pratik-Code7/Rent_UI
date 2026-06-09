import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  // Serve from root so assets resolve correctly on Vercel and in preview.
  base: "/",
  server: {
    hmr: true,
    watch: {
      usePolling: true,
      interval: 100,
    },
  },
});
