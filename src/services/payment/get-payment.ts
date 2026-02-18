import type { GetPaymentResponse } from "../../types/payment.responses";
import { postJson } from "../../http/request";

export const getPayment = (paymentId: string) =>
    postJson<GetPaymentResponse>("/api/mitra/v2/get_payment", {
        payment_id: paymentId,
    });
