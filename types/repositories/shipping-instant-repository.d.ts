export class ShippingInstantRepository extends RepositoryBase {
    /**
     * @param {ShippingPriceInstantData} shippingPriceInstantData
     * @return {Promise<(boolean|string)[]>}
     */
    price(shippingPriceInstantData: ShippingPriceInstantData): Promise<(boolean | string)[]>;
    /**
     * @param {string} orderId
     * @return {Promise<(boolean|string)[]>}
     */
    findNewDriver(orderId: string): Promise<(boolean | string)[]>;
    /**
     * @param {string} paymentId
     * @return {Promise<(boolean|string)[]>}
     */
    getPayment(paymentId: string): Promise<(boolean | string)[]>;
    /**
     * @param {RequestPickupInstantData} requestPickupInstantData
     * @return {Promise<(boolean|string)[]>}
     */
    create(requestPickupInstantData: RequestPickupInstantData): Promise<(boolean | string)[]>;
    /**
     * @param {string} orderId
     * @return {Promise<(boolean|string)[]>}
     */
    cancel(orderId: string): Promise<(boolean | string)[]>;
}
import { RepositoryBase } from "../base/repository-base";
