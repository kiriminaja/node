import { getPricingExpress } from "./pricing-express.js";
import { getPricingInstant } from "./pricing-instant.js";
import { address } from "../address/index.js";

export const coverageArea = {
    ...address,
    pricingExpress: getPricingExpress,
    pricingInstant: getPricingInstant,
};
