import type { CreateInstantPickupResponse } from "../../../types/order.responses.js";
import { postJson } from "../../../http/request.js";

export const createInstantPickup = (payload: unknown) =>
    postJson<CreateInstantPickupResponse>(
        "/api/mitra/v4/instant/pickup/request",
        payload,
    );
