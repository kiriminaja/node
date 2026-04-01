import { defineConfig } from "tsdown";

export default defineConfig({
    entry: ["src/index.ts", "src/adapters/h3.ts"],
    format: ["esm", "cjs"],
    sourcemap: true,
    dts: true,
    cjsDefault: true,
    tsconfig: "tsconfig.build.json",
    inputOptions: {
        resolve: {
            alias: {
                "@": "./src",
            },
        },
    },
});
