import type { KAResponse } from "../../../types/api-response";
import type { RequestPickupPayload } from "../../../types/order";
import { postJson } from "../../../http/request";

export const requestPickup = (payload: RequestPickupPayload) =>
    postJson<KAResponse<unknown>>("/api/mitra/v6.1/request_pickup", payload);
