import type { CourierListResponse } from "../../types/courier.js";
import { postJson } from "../../http/request.js";

export const listCouriers = () =>
    postJson<CourierListResponse>("/api/mitra/couriers");
