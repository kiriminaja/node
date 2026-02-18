import type { KAResponse } from "../../../types/api-response";
import { postJson } from "../../../http/request";

export const requestPickupV61 = <T = unknown>(payload: unknown) => {
    return postJson<KAResponse<T>>("/api/mitra/v6.1/request_pickup", payload);
};
