import type { CourierListResponse } from "../../types/courier";
import { postJson } from "../../http/request";

export const listCouriers = () =>
    postJson<CourierListResponse>("/api/mitra/couriers");
