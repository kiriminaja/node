import type { CancelExpressOrderResponse } from "../../../types/order.responses";
import { requestJson } from "../../../http/request";

export const cancelExpressOrder = (awb: string, reason: string) =>
    requestJson<CancelExpressOrderResponse>("/api/mitra/v3/cancel_shipment", {
        method: "POST",
        query: {
            awb,
            reason,
        },
    });
