import { getPricingExpress } from "./pricing-express";
import { getPricingInstant } from "./pricing-instant";
import { address } from "../address/index";

export const coverageArea = {
    ...address,
    pricingExpress: getPricingExpress,
    pricingInstant: getPricingInstant,
};
