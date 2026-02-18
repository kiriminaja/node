import { getCourierDetail } from "./detail";
import { getCourierGroups } from "./group";
import { listCouriers } from "./list";
import { setWhitelistServices } from "./set-whitelist-services";

export const courier = {
    list: listCouriers,
    group: getCourierGroups,
    detail: getCourierDetail,
    setWhitelistServices,
};
