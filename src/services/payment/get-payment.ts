import type { GetPaymentResponse } from "../../types/payment.responses.js";
import { postJson } from "../../http/request.js";

export const getPayment = (paymentId: string) =>
    postJson<GetPaymentResponse>("/api/mitra/v2/get_payment", {
        payment_id: paymentId,
    });
