import type { SubDistrictListResponse } from "../../types/coverage-area.responses";
import { postJson } from "../../http/request";

export const getSubDistricts = (kecamatanId: number) => {
    return postJson<SubDistrictListResponse>("/api/mitra/kelurahan", {
        kecamatan_id: kecamatanId,
    });
};
