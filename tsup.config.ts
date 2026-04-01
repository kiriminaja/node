import { defineConfig } from "tsup";

export default defineConfig([
  {
    entry: ["src/index.ts", "src/adapters/h3.ts"],
    format: ["esm"],
    outExtension: () => ({ js: ".mjs" }),
    sourcemap: true,
    clean: true,
    splitting: false,
    treeshake: true,
    dts: false,
    tsconfig: "tsconfig.build.json",
  },
  {
    entry: ["src/index.ts", "src/adapters/h3.ts"],
    format: ["cjs"],
    outExtension: () => ({ js: ".cjs" }),
    sourcemap: true,
    splitting: false,
    treeshake: true,
    dts: false,
    tsconfig: "tsconfig.build.json",
  },
]);