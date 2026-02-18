import { KAEnv } from "./config/api";
import { init } from "./config/client";
import { services } from "./services";

export { KAEnv };

const KiriminAja = {
    init,
    Init: init,
    ...services,
};

export default KiriminAja;
