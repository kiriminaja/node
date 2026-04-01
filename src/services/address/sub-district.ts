import type { SubDistrictListResponse } from "../../types/coverage-area.responses.js";
import { postJson } from "../../http/request.js";

export const getSubDistricts = (kecamatanId: number) => {
    return postJson<SubDistrictListResponse>("/api/mitra/kelurahan", {
        kecamatan_id: kecamatanId,
    });
};
