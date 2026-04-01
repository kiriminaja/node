import type { KAResponse } from "../../types/api-response";
import { postJson } from "../../http/request";

export type PricingExpressPayload = {
    origin: number;
    destination: number;
    weight: number;
    item_value: string | number;
    insurance: number;
    courier: string[];
};

export const getPricingExpress = <T = unknown>(
    payload: PricingExpressPayload,
) => {
    return postJson<KAResponse<unknown>>(
        "/api/mitra/v6.1/shipping_price",
        payload,
    );
};
