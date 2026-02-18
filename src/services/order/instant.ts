import type { KAResponse } from "../../types/api-response";
import { deleteJson, getJson, postJson } from "../../http/request";

export const createInstantPickup = <T = unknown>(payload: unknown) => {
    return postJson<KAResponse<T>>(
        "/api/mitra/v4/instant/pickup/request",
        payload,
    );
};

export const findNewInstantDriver = <T = unknown>(orderId: string) => {
    return postJson<KAResponse<T>>(
        "/api/mitra/v4/instant/pickup/find-new-driver",
        {
            order_id: orderId,
        },
    );
};

export const cancelInstantOrder = <T = unknown>(orderId: string) => {
    return deleteJson<KAResponse<T>>(
        `/api/mitra/v4/instant/pickup/void/${orderId}`,
    );
};

export const trackInstantOrder = <T = unknown>(orderId: string) => {
    return getJson<KAResponse<T>>(`/api/mitra/v4/instant/tracking/${orderId}`);
};
