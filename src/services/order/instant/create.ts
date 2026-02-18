import type { CreateInstantPickupResponse } from "../../../types/order.responses";
import { postJson } from "../../../http/request";

export const createInstantPickup = (payload: unknown) =>
    postJson<CreateInstantPickupResponse>(
        "/api/mitra/v4/instant/pickup/request",
        payload,
    );
