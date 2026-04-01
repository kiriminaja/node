import { defineKiriminAjaPlugin, KAEnv } from "kiriminaja/adapters/h3";

export default defineKiriminAjaPlugin({
    apiKey: process.env.KIRIMINAJA_API_KEY,
    env: KAEnv.SANDBOX,
});
