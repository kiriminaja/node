import type { KAResponse } from "../../../types/api-response";
import { postJson } from "../../../http/request";

export const requestPickupV5 = (payload: unknown) =>
    postJson<KAResponse<unknown>>("/api/mitra/v5/request_pickup", payload);
