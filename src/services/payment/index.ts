import type { KAResponse } from "../../types/api-response";
import { postJson } from "../../http/request";

export const payment = {
    getPayment: <T = unknown>(paymentId: string) =>
        postJson<KAResponse<T>>("/api/mitra/v2/get_payment", {
            payment_id: paymentId,
        }),
};
