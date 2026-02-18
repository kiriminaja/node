import type { KAResponse } from "../../../types/api-response";
import { postJson } from "../../../http/request";

export const requestPickupV61 = (payload: unknown) =>
    postJson<KAResponse<unknown>>("/api/mitra/v6.1/request_pickup", payload);
