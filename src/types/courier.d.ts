import type { KAResponse } from "./api-response";

export type CourierType = "Express" | "Instant" | string;

export type CourierListItem = {
    code: string;
    name: string;
    type: CourierType;
};

export type CourierGroupItem = {
    code: string;
    name: string;
};

export type CourierServiceItem = {
    name: string;
    code: string;
    cut_off_time: string | null;
    volumetrik: string | null;
    rounded: number | null;
    courier_group: string;
};

export type CourierListResponse = KAResponse<CourierListItem[]> & {
    method: "get_active_courier";
    text: "Data Loaded";
    datas: CourierListItem[];
};

export type CourierGroupResponse = KAResponse<CourierGroupItem[]> & {
    method: "get_courier_groups";
    text: "Data Loaded";
    datas: CourierGroupItem[];
};

export type CourierDetailResponse = KAResponse<CourierServiceItem[]> & {
    method: "get_services_from_courier";
    text: "Data Loaded";
    datas: CourierServiceItem[];
};

export type SetCourierPreferenceResponse = KAResponse<never> & {
    method: "set_whitelist_services";
    text: "Success to set";
};
