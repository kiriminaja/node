import { BaseResponse } from "./response";

export type PickupScheduleItem = {
    clock: string;
    until: string;
    expired: number;
    libur: boolean;
};

export interface PickupSchedulesResponse extends BaseResponse {
    schedules: PickupScheduleItem[];
}
