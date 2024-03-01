import {resolve} from "path";
import {defineConfig} from "vite";
import {fileURLToPath, URL} from "node:url";
import pkg from "./package.json";
import banner from "vite-plugin-banner";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
    build: {
        lib: {
            formats: ["umd"],
            entry: resolve(__dirname, "src/index.ts"),
            //将pkg.name转换为驼峰命名
            name: pkg.name.replace(/-(\w)/g, (_, c) => (c ? c.toUpperCase() : "")),
        },
        rollupOptions: {
            output: {
                globals: {vue: 'vue'},
                exports: "named",
            },
            external: ['vue']
        },
    },
    plugins: [
        vue(),
        banner(
            `/**\n * name: ${pkg.name}\n * version: v${
                pkg.version
            }\n * description: ${pkg.description}\n * author: ${
                pkg.author
            }\n * homepage: ${pkg.homepage}\n */`
        )
    ],
    resolve: {
        alias: {
            "@": fileURLToPath(new URL("./src", import.meta.url)),
        },
    },
});
