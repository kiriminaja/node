import type { DistrictListResponse } from "../../types/coverage-area.responses";
import { postJson } from "../../http/request";

export const getDistricts = (kabupatenId: number) => {
    return postJson<DistrictListResponse>("/api/mitra/kecamatan", {
        kabupaten_id: kabupatenId,
    });
};
