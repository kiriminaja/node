import { KA_ENV_URL, KAEnv } from "./api.js";

export type FetchLike = (
    input: Parameters<typeof fetch>[0],
    init?: Parameters<typeof fetch>[1],
) => ReturnType<typeof fetch>;

export type HeadersInitLike =
    | Record<string, string>
    | Array<[string, string]>
    | Parameters<typeof fetch>[1];

export type InitOptions = {
    env?: KAEnv;
    baseUrl?: string;
    apiKey?: string;
    fetch?: FetchLike;
    headers?: HeadersInitLike;
};

export type ClientConfig = {
    env: KAEnv;
    baseUrl: string;
    apiKey?: string;
    fetch: FetchLike;
    headers?: HeadersInitLike;
};

let singletonConfig: ClientConfig | undefined;

export const init = ({
    env = KAEnv.SANDBOX,
    baseUrl,
    apiKey,
    fetch: fetchImpl,
    headers,
}: InitOptions = {}): ClientConfig => {
    const resolvedFetch = fetchImpl ?? (globalThis as Record<string, unknown>).fetch as FetchLike | undefined;
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
            "KiriminAja SDK is not initialized. Call KiriminAja.init(), or use a framework adapter (e.g. defineKiriminAjaPlugin for h3/Nitro), or pass options directly to useKiriminAja().",
        );
    }
    return singletonConfig;
};
