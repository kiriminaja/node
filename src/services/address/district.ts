import type { DistrictListResponse } from "../../types/coverage-area.responses.js";
import { postJson } from "../../http/request.js";

export const getDistricts = (kabupatenId: number) => {
    return postJson<DistrictListResponse>("/api/mitra/kecamatan", {
        kabupaten_id: kabupatenId,
    });
};
