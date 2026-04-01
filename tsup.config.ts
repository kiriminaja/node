// tsup.config.ts
import { defineConfig } from "tsup";

export default defineConfig({
    entry: ["src/index.ts", "src/adapters/h3.ts"],
    format: ["esm", "cjs"],
    outExtension({ format }: { format: "esm" | "cjs" | "iife" }) {
        return {
            js: format === "esm" ? ".mjs" : ".cjs",
        };
    },
    dts: { resolve: true },
    sourcemap: true,
    clean: true,
    splitting: false,
    treeshake: true,
    tsconfig: "tsconfig.build.json",
});
