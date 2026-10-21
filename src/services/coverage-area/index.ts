import { getPricingExpress } from "./pricing-express";
import { getPricingInstant } from "./pricing-instant";
import { address } from "../address/index";
import { getPricingExpressFull } from "./pricing-express-full";

export const coverageArea = {
    ...address,
    pricingExpress: getPricingExpress,
    pricingExpressFull: getPricingExpressFull,
    pricingInstant: getPricingInstant,
};
