import { getConfig } from "../config/client";

type RequestMethod = "GET" | "POST" | "DELETE";

type RequestOptions = {
    method?: RequestMethod;
    query?: Record<string, string | number | boolean | undefined | null>;
    body?: unknown;
    headers?: Record<string, string>;
};

const buildUrl = (path: string, baseUrl: string) => {
    const normalizedPath = path.startsWith("/") ? path : `/${path}`;
    return new URL(normalizedPath, baseUrl);
};

export const requestJson = async <T>(
    path: string,
    options: RequestOptions = {},
): Promise<T> => {
    const config = getConfig();
    const url = buildUrl(path, config.baseUrl);

    if (options.query) {
        for (const [key, value] of Object.entries(options.query)) {
            if (value === undefined || value === null) continue;
            url.searchParams.set(key, String(value));
        }
    }

    const method: RequestMethod = options.method ?? "POST";
    const hasJsonBody =
        options.body !== undefined && method !== "GET" && method !== "DELETE";

    const headers = new Headers();
    headers.set("Accept", "application/json");
    if (hasJsonBody) headers.set("Content-Type", "application/json");
    if (config.apiKey) headers.set("Authorization", `Bearer ${config.apiKey}`);

    if (config.headers) {
        new Headers(config.headers as any).forEach((value, key) => {
            headers.set(key, value);
        });
    }

    if (options.headers) {
        for (const [key, value] of Object.entries(options.headers)) {
            headers.set(key, value);
        }
    }

    const response = await config.fetch(url.toString(), {
        method,
        headers,
        ...(hasJsonBody ? { body: JSON.stringify(options.body) } : {}),
    });

    if (!response.ok) {
        throw new Error(
            `Request failed: ${response.status} ${response.statusText}`,
        );
    }

    return (await response.json()) as T;
};

export const postJson = async <T>(
    path: string,
    body?: unknown,
    options: Omit<RequestOptions, "method" | "body"> = {},
): Promise<T> => {
    return requestJson<T>(path, { ...options, method: "POST", body });
};

export const getJson = async <T>(
    path: string,
    options: Omit<RequestOptions, "method" | "body"> = {},
): Promise<T> => {
    return requestJson<T>(path, { ...options, method: "GET" });
};

export const deleteJson = async <T>(
    path: string,
    options: Omit<RequestOptions, "method" | "body"> = {},
): Promise<T> => {
    return requestJson<T>(path, { ...options, method: "DELETE" });
};
