import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: "/Rent_UI/",
  server: {
    hmr: true,
    watch: {
      usePolling: true,
      interval: 100,
    },
  },
});
