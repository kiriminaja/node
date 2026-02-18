import type { KAResponse } from "../../types/api-response";
import { postJson } from "../../http/request";

export const pickup = {
    schedules: <T = unknown>() =>
        postJson<KAResponse<T>>("/api/mitra/v2/schedules"),
};
