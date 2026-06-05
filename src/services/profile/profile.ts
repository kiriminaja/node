import type { ProfileResponse } from "../../types/profile";
import { getJson } from "../../http/request";

export const profile = () =>
    getJson<ProfileResponse>("/api/mitra/v6.2/profile");
