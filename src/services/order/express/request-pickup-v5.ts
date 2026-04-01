import type { KAResponse } from "../../../types/api-response.js";
import { postJson } from "../../../http/request.js";

export const requestPickupV5 = (payload: unknown) =>
    postJson<KAResponse<unknown>>("/api/mitra/v5/request_pickup", payload);
