import type { ProfileResponse } from "../../types/profile";
import { getJson } from "../../http/request";
import { asRecord, failedResponse, responseText } from "../../utils/normalize-response";

/** Normalize PHP-supported envelopes to the existing Node `results` property. */
export const profile = async (): Promise<ProfileResponse> => {
    const raw = asRecord(await getJson<unknown>("/api/mitra/v6.2/profile")) ?? {};
    if (raw.status === false) {
        return failedResponse(raw, "Failed to fetch profile") as ProfileResponse;
    }

    let results = asRecord(raw.results) ?? asRecord(raw.result) ?? asRecord(raw.data);
    if (!results && ["id", "name", "email", "metadata"].some(key => raw[key] != null)) {
        results = raw;
    }
    if (!results) {
        return { ...raw, status: false, method: raw.method ?? "GET",
            text: "Profile data is missing from the API response" } as ProfileResponse;
    }
    return { ...raw, status: true, method: raw.method ?? "GET",
        text: responseText(raw, "Profile loaded"), results } as ProfileResponse;
};
