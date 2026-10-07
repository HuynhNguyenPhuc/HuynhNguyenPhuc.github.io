import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// A GitHub user site (HuynhNguyenPhuc.github.io) is served from the domain root.
export default defineConfig({
  plugins: [react()],
  base: "/",
});
