import type { CourierGroupResponse } from "../../types/courier.js";
import { postJson } from "../../http/request.js";

export const getCourierGroups = () =>
    postJson<CourierGroupResponse>("/api/mitra/couriers_group");
