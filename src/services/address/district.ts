import type { District } from "../../types/coverage-area";
import type { KAResponse } from "../../types/api-response";
import { postJson } from "../../http/request";

export const getDistricts = (kabupatenId: number) => {
    return postJson<KAResponse<District[]>>("/api/mitra/kecamatan", {
        kabupaten_id: kabupatenId,
    });
};
