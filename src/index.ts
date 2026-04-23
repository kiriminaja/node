import { KAEnv } from "./config/api";
import { init } from "./config/client";
import { services } from "./services/index";
import { Volumetric } from "./utils/volumetric";

export { KAEnv, Volumetric };
export * from "./utils/volumetric";

const KiriminAja = {
    init,
    Init: init,
    ...services,
    Volumetric,
};

export default KiriminAja;
