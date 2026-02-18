import type { KAResponse } from "../../../types/api-response";
import { getJson } from "../../../http/request";

export const trackInstantOrder = <T = unknown>(orderId: string) => {
    return getJson<KAResponse<T>>(`/api/mitra/v4/instant/tracking/${orderId}`);
};
