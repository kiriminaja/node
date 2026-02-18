import type { KAResponse } from "../../../types/api-response";
import { postJson } from "../../../http/request";

export const requestPickupV5 = <T = unknown>(payload: unknown) => {
    return postJson<KAResponse<T>>("/api/mitra/v5/request_pickup", payload);
};
