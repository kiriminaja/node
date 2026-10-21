import type { KAResponse } from "../../types/api-response";
import { postJson } from "../../http/request";

/** PHP ShippingFullPriceData: quote all couriers without filtering or item fields. */
export type PricingExpressFullPayload = {
    origin: number;
    destination: number;
    weight: number;
};

export const getPricingExpressFull = <T = unknown>(payload: PricingExpressFullPayload) =>
    postJson<KAResponse<T>>("/api/mitra/v6.1/shipping_price", payload);
