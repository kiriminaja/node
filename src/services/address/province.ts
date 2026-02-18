import type { ProvinceListResponse } from "../../types/coverage-area.responses";
import { postJson } from "../../http/request";

export const getProvinces = () => {
    return postJson<ProvinceListResponse>("/api/mitra/province");
};
