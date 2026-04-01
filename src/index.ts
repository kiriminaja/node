import { KAEnv } from "./config/api.js";
import { init } from "./config/client.js";
import { services } from "./services/index.js";

export { KAEnv };

const KiriminAja = {
    init,
    Init: init,
    ...services,
};

export default KiriminAja;
