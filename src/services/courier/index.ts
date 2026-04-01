import { getCourierDetail } from "./detail.js";
import { getCourierGroups } from "./group.js";
import { listCouriers } from "./list.js";
import { setWhitelistServices } from "./set-whitelist-services.js";

export const courier = {
    list: listCouriers,
    group: getCourierGroups,
    detail: getCourierDetail,
    setWhitelistServices,
};
