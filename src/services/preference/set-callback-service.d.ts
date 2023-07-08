export class SetCallbackService extends ServiceBase {
    /**
     * @param {string} url
     */
    constructor(url: string);
    /**
     * @type {PreferenceRepository}
     */
    preferenceRepository: PreferenceRepository;
    /**
     * @type {string}
     */
    url: string;
    /**
     * @return {ServiceResponse}
     */
    call(): ServiceResponse;
}
import { ServiceBase } from "../../base/service-base";
import { PreferenceRepository } from "../../repositories/preference-repository";
import { ServiceResponse } from "../../responses/service-response";
