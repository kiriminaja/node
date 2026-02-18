import type { KAResponse } from "../../../types/api-response";
import { requestJson } from "../../../http/request";

export const cancelExpressOrder = <T = unknown>(
    awb: string,
    reason: string,
) => {
    return requestJson<KAResponse<T>>("/api/mitra/v3/cancel_shipment", {
        method: "POST",
        query: {
            awb,
            reason,
        },
    });
};
