import type { CourierDetailResponse } from "../../types/courier.js";
import { postJson } from "../../http/request.js";

export const getCourierDetail = (courierCode: string) =>
    postJson<CourierDetailResponse>("/api/mitra/courier_services", {
        courier_code: courierCode,
    });
