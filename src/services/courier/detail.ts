import type { CourierDetailResponse } from "../../types/courier";
import { postJson } from "../../http/request";

export const getCourierDetail = (courierCode: string) =>
    postJson<CourierDetailResponse>("/api/mitra/courier_services", {
        courier_code: courierCode,
    });
