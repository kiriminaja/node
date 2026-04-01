import type { SetCourierPreferenceResponse } from "../../types/courier";
import { postJson } from "../../http/request";

export const setWhitelistServices = (services: string[]) =>
    postJson<SetCourierPreferenceResponse>(
        "/api/mitra/v3/set_whitelist_services",
        {
            services,
        },
    );
