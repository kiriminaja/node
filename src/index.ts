import { KAEnv } from "./config/api";
import { init } from "./config/client";
import { address } from "./services/address";
import { coverageArea } from "./services/coverage-area";
import { order } from "./services/order";
import { pickup } from "./services/pickup";
import { payment } from "./services/payment";
import { courier } from "./services/courier";

export { KAEnv };

const KiriminAja = {
    init,
    address,
    coverageArea,
    order,
    pickup,
    payment,
    courier,
};

export default KiriminAja;
