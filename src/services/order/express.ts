import type { KAResponse } from "../../types/api-response";
import { postJson, requestJson } from "../../http/request";

export const trackExpressOrder = <T = unknown>(orderId: string) => {
    return postJson<KAResponse<T>>("/api/mitra/tracking", {
        order_id: orderId,
    });
};

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

export const requestPickupV5 = <T = unknown>(payload: unknown) => {
    return postJson<KAResponse<T>>("/api/mitra/v5/request_pickup", payload);
};

export const requestPickupV61 = <T = unknown>(payload: unknown) => {
    return postJson<KAResponse<T>>("/api/mitra/v6.1/request_pickup", payload);
};
