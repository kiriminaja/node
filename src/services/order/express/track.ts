import type { ExpressTrackingResponse } from "../../../types/order.responses";
import { postJson } from "../../../http/request";

export const trackExpressOrder = (orderId: string) =>
    postJson<ExpressTrackingResponse>("/api/mitra/tracking", {
        order_id: orderId,
    });
