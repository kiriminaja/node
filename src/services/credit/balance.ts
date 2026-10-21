import type { CreditBalanceResponse } from "../../types/credit-responses";
import { getJson } from "../../http/request";
import { asRecord, failedResponse, responseText } from "../../utils/normalize-response";

const numericBalance = (value: unknown): number | undefined => {
    // Match PHP numeric strings, not JS-only hex, booleans, null, or blanks.
    if (typeof value !== "number" &&
        !(typeof value === "string" && /^[+-]?(?:\d+\.?\d*|\.\d+)(?:e[+-]?\d+)?$/i.test(value.trim()))) {
        return undefined;
    }
    const number = Number(value);
    return Number.isFinite(number) ? number : undefined;
};

/** Normalize PHP-supported balance envelopes to the existing Node `data.balance`. */
export const balance = async (): Promise<CreditBalanceResponse> => {
    const raw = asRecord(await getJson<unknown>("/api/mitra/v6.2/credit/balance")) ?? {};
    if (raw.status === false) {
        return failedResponse(raw, "Failed to fetch credit balance") as CreditBalanceResponse;
    }

    for (const candidate of [raw.results, raw.result, raw.data, raw.payload, raw]) {
        const value = numericBalance(asRecord(candidate)?.balance);
        if (value !== undefined) {
            return { ...raw, status: true, method: raw.method ?? "GET",
                text: responseText(raw, "loaded"),
                data: { ...asRecord(raw.data), balance: value } } as CreditBalanceResponse;
        }
    }
    return { ...raw, status: false, method: raw.method ?? "GET",
        text: "Credit balance is missing from the API response" } as CreditBalanceResponse;
};
