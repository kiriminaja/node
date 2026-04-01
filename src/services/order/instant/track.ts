import type { InstantTrackingResponse } from "../../../types/order.responses.js";
import { getJson } from "../../../http/request.js";

export const trackInstantOrder = (orderId: string) =>
    getJson<InstantTrackingResponse>(
        `/api/mitra/v4/instant/tracking/${orderId}`,
    );
