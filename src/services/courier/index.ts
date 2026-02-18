import type {
    CourierDetailResponse,
    CourierGroupResponse,
    CourierListResponse,
    SetCourierPreferenceResponse,
} from "../../types/courier";
import { postJson } from "../../http/request";

export const courier = {
    list: () => postJson<CourierListResponse>("/api/mitra/couriers"),
    group: () => postJson<CourierGroupResponse>("/api/mitra/couriers_group"),
    detail: (courierCode: string) =>
        postJson<CourierDetailResponse>("/api/mitra/courier_services", {
            courier_code: courierCode,
        }),
    setWhitelistServices: (services: string[]) =>
        postJson<SetCourierPreferenceResponse>(
            "/api/mitra/v3/set_whitelist_services",
            {
                services,
            },
        ),
};
