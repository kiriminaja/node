import type { InstantTrackingResponse } from "../../../types/order.responses";
import { getJson } from "../../../http/request";

export const trackInstantOrder = (orderId: string) =>
    getJson<InstantTrackingResponse>(
        `/api/mitra/v4/instant/tracking/${orderId}`,
    );
