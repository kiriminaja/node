import type { PickupSchedulesResponse } from "../../types/pickup.responses.js";
import { postJson } from "../../http/request.js";

export const getPickupSchedules = () =>
    postJson<PickupSchedulesResponse>("/api/mitra/v2/schedules");
