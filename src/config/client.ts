import { KA_ENV_URL, KAEnv } from "./api";

export type InitOptions = {
    env?: KAEnv;
    baseUrl?: string;
    apiKey?: string;
    fetch?: typeof fetch;
    headers?: Bun.HeadersInit;
};

export type ClientConfig = {
    env: KAEnv;
    baseUrl: string;
    apiKey?: string;
    fetch: typeof fetch;
    headers?: Bun.HeadersInit;
};

let singletonConfig: ClientConfig | undefined;

export const init = ({
    env = KAEnv.SANDBOX,
    baseUrl,
    apiKey,
    fetch: fetchImpl,
    headers,
}: InitOptions = {}): ClientConfig => {
    const resolvedFetch = fetchImpl ?? globalThis.fetch;
    if (!resolvedFetch) {
        throw new Error(
            "Global fetch is not available. Provide Init({ fetch }) or use a runtime with fetch (Node 18+/Bun).",
        );
    }

    const resolvedBaseUrl = baseUrl ?? KA_ENV_URL[env];
    singletonConfig = {
        env,
        baseUrl: resolvedBaseUrl,
        apiKey,
        fetch: resolvedFetch,
        headers,
    };

    return singletonConfig;
};

export const getConfig = (): ClientConfig => {
    if (!singletonConfig) {
        throw new Error(
            "KiriminAja.Init() must be called before using any API methods.",
        );
    }
    return singletonConfig;
};
