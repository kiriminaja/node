import type { CourierGroupResponse } from "../../types/courier";
import { postJson } from "../../http/request";

export const getCourierGroups = () =>
    postJson<CourierGroupResponse>("/api/mitra/couriers_group");
