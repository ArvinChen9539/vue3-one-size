import { defineConfig } from "vite";
import { fileURLToPath, URL } from "node:url";
import pkg from "../package.json";
import banner from "vite-plugin-banner";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  base: "/vue3-one-size",
  build: {
    outDir: "example/dist",
  },
  plugins: [
    vue(),
    banner(
      `/**\n * name: ${pkg.name}\n * version: v${pkg.version}\n * description: ${pkg.description}\n * author: ${pkg.author}\n */`,
    ),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
