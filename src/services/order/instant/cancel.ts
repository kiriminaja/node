import type { CancelInstantOrderResponse } from "../../../types/order.responses";
import { deleteJson } from "../../../http/request";

export const cancelInstantOrder = (orderId: string) =>
    deleteJson<CancelInstantOrderResponse>(
        `/api/mitra/v4/instant/pickup/void/${orderId}`,
    );
