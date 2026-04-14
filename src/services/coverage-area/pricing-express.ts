import type { KAResponse } from "../../types/api-response";
import { postJson } from "../../http/request";
import type { ExpressService } from "@/types/courier";

export type PricingExpressPayload = {
    origin: number;
    destination: number;
    weight: number;
    item_value: string | number;
    insurance: number;

    /**
     * @description Use string for custom courier codes that not provided in ExpressService enum
     */
    courier: (ExpressService | string)[];
};

export const getPricingExpress = <T = unknown>(
    payload: PricingExpressPayload,
) => {
    return postJson<KAResponse<T>>("/api/mitra/v6.1/shipping_price", payload);
};
