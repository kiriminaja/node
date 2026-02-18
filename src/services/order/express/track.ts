import type { KAResponse } from "../../../types/api-response";
import { postJson } from "../../../http/request";

export const trackExpressOrder = <T = unknown>(orderId: string) => {
    return postJson<KAResponse<T>>("/api/mitra/tracking", {
        order_id: orderId,
    });
};
