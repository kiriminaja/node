import { defineConfig } from "vite";
import { resolve } from "path";
import dts from "vite-plugin-dts";

export default defineConfig({
    plugins: [
        dts({
            tsconfigPath: "./tsconfig.build.json",
            entryRoot: "./src",
        }),
    ],
    resolve: {
        alias: {
            "@": resolve(__dirname, "src"),
        },
    },
    build: {
        lib: {
            entry: {
                index: resolve(__dirname, "src/index.ts"),
                "adapters/h3": resolve(__dirname, "src/adapters/h3.ts"),
            },
            formats: ["es", "cjs"],
            fileName: (format, entryName) => {
                const ext = format === "es" ? "mjs" : "cjs";
                return `${entryName}.${ext}`;
            },
        },
        sourcemap: true,
        rollupOptions: {
            output: {
                chunkFileNames: "_shared/[name].js",
                exports: "named",
            },
        },
    },
});
