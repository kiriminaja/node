export enum KAEnv {
    SANDBOX = "sandbox",
    PRODUCTION = "production",
}

export const KA_ENV_URL: Record<KAEnv, string> = {
    [KAEnv.SANDBOX]: "https://tdev.kiriminaja.com",
    [KAEnv.PRODUCTION]: "https://client.kiriminaja.com",
};
