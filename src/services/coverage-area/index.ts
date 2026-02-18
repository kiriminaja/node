import { getPricingExpress } from "./pricing-express";
import { getPricingInstant } from "./pricing-instant";
import { address } from "../address";

export const coverageArea = {
    ...address,
    pricingExpress: getPricingExpress,
    pricingInstant: getPricingInstant,
};
