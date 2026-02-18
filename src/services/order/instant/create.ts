import type { KAResponse } from "../../../types/api-response";
import { postJson } from "../../../http/request";

export const createInstantPickup = <T = unknown>(payload: unknown) => {
    return postJson<KAResponse<T>>(
        "/api/mitra/v4/instant/pickup/request",
        payload,
    );
};
