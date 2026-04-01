// tsup.config.ts
export default {
    entry: ["src/index.ts", "src/adapters/h3.ts"],
    format: ["esm", "cjs"], // outputs .mjs and .cjs
    dts: { resolve: true },
    sourcemap: true,
    tsconfig: "tsconfig.build.json",
};
