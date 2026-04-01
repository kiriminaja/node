import type { KAResponse } from "../../../types/api-response.js";
import { postJson } from "../../../http/request.js";

export const requestPickupV61 = (payload: unknown) =>
    postJson<KAResponse<unknown>>("/api/mitra/v6.1/request_pickup", payload);
