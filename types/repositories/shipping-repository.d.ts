export class ShippingRepository extends RepositoryBase {
    /**
     * @param {ShippingPriceData} data
     * @return {Promise<(boolean|string)[]>}
     */
    price(data: ShippingPriceData): Promise<(boolean | string)[]>;
    /**
     * @return {Promise<(boolean|string)[]>}
     */
    schedules(): Promise<(boolean | string)[]>;
    /**
     * @param {RequestPickupData} data
     * @return {Promise<(boolean|string)[]>}
     */
    requestPickup(data: RequestPickupData): Promise<(boolean | string)[]>;
    /**
     * @param {string} paymentId
     * @return {Promise<(boolean|string)[]>}
     */
    payment(paymentId: string): Promise<(boolean | string)[]>;
    /**
     * @param {string} awb
     * @param {string} reason
     * @return {Promise<(boolean|string)[]>}
     */
    cancel(awb: string, reason: string): Promise<(boolean | string)[]>;
    /**
     * @param {string} orderId
     * @return {Promise<(boolean|string)[]>}
     */
    tracking(orderId: string): Promise<(boolean | string)[]>;
}
import { RepositoryBase } from "../base/repository-base";
