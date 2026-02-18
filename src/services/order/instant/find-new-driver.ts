import type { KAResponse } from "../../../types/api-response";
import { postJson } from "../../../http/request";

export const findNewInstantDriver = <T = unknown>(orderId: string) => {
    return postJson<KAResponse<T>>(
        "/api/mitra/v4/instant/pickup/find-new-driver",
        {
            order_id: orderId,
        },
    );
};
