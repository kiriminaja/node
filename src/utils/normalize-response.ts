// Endpoint-specific normalization: other services keep their raw API envelopes.
export type ResponseRecord = Record<string, unknown>;

export const asRecord = (value: unknown): ResponseRecord | undefined =>
    value !== null && typeof value === "object" && !Array.isArray(value)
        ? value as ResponseRecord
        : undefined;

export const responseText = (response: ResponseRecord, fallback: string): string =>
    typeof response.text === "string" ? response.text
        : typeof response.message === "string" ? response.message : fallback;

export const failedResponse = (response: ResponseRecord, fallback: string) => ({
    ...response,
    status: false,
    method: typeof response.method === "string" ? response.method : "GET",
    text: responseText(response, fallback),
});
