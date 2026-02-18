import type { SubDistrict } from "../../types/coverage-area";
import type { KAResponse } from "../../types/api-response";
import { postJson } from "../../http/request";

export const getSubDistricts = (kecamatanId: number) => {
    return postJson<KAResponse<SubDistrict[]>>("/api/mitra/kelurahan", {
        kecamatan_id: kecamatanId,
    });
};
