import type { CreateInstantPickupResponse } from "../../../types/order-responses";
import type { InstantPickupPayload } from "../../../types/order";
import { postJson } from "../../../http/request";

export const createInstantPickup = (payload: InstantPickupPayload) =>
    postJson<CreateInstantPickupResponse>(
        "/api/mitra/v4/instant/pickup/request",
        payload,
    );
