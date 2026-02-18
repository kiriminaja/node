import type { KAResponse } from "../../../types/api-response";
import { deleteJson } from "../../../http/request";

export const cancelInstantOrder = <T = unknown>(orderId: string) => {
    return deleteJson<KAResponse<T>>(
        `/api/mitra/v4/instant/pickup/void/${orderId}`,
    );
};
