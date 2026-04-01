import type { SetCourierPreferenceResponse } from "../../types/courier.js";
import { postJson } from "../../http/request.js";

export const setWhitelistServices = (services: string[]) =>
    postJson<SetCourierPreferenceResponse>(
        "/api/mitra/v3/set_whitelist_services",
        {
            services,
        },
    );
