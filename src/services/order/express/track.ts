import type { ExpressTrackingResponse } from "../../../types/order.responses.js";
import { postJson } from "../../../http/request.js";

export const trackExpressOrder = (orderId: string) =>
    postJson<ExpressTrackingResponse>("/api/mitra/tracking", {
        order_id: orderId,
    });
