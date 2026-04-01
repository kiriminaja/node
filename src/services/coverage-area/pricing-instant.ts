import type { KAResponse } from "../../types/api-response.js";
import { postJson } from "../../http/request.js";

export type PricingInstantPayload = {
    service: string[];
    item_price: number;
    origin: {
        lat: number;
        long: number;
        address: string;
    };
    destination: {
        lat: number;
        long: number;
        address: string;
    };
    weight: number;
    vehicle: string;
    timezone: string;
};

export const getPricingInstant = <T = unknown>(
    payload: PricingInstantPayload,
) => {
    return postJson<KAResponse<unknown>>(
        "/api/mitra/v4/instant/pricing",
        payload,
    );
};
