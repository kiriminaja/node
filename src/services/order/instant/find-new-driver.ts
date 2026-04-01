import type { FindNewInstantDriverResponse } from "../../../types/order.responses.js";
import { postJson } from "../../../http/request.js";

export const findNewInstantDriver = (orderId: string) =>
    postJson<FindNewInstantDriverResponse>(
        "/api/mitra/v4/instant/pickup/find-new-driver",
        {
            order_id: orderId,
        },
    );
