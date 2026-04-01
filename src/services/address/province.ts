import type { ProvinceListResponse } from "../../types/coverage-area.responses.js";
import { postJson } from "../../http/request.js";

export const getProvinces = () => {
    return postJson<ProvinceListResponse>("/api/mitra/province");
};
