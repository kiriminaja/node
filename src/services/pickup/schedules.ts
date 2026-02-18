import type { PickupSchedulesResponse } from "../../types/pickup.responses";
import { postJson } from "../../http/request";

export const getPickupSchedules = () =>
    postJson<PickupSchedulesResponse>("/api/mitra/v2/schedules");
