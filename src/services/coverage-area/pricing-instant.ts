import type { KAResponse } from "../../types/api-response";
import { postJson } from "../../http/request";
import type { InstantService } from "@/types/courier";

export type PricingInstantPayload = {
    service: InstantService[];
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
    vehicle: "motor" | "mobil";
    timezone: string;
};

export const getPricingInstant = <T = unknown>(
    payload: PricingInstantPayload,
) => {
    return postJson<KAResponse<T>>("/api/mitra/v4/instant/pricing", payload);
};
