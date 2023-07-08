export class SetWhitelistExpeditionService extends ServiceBase {
    /**
     * @param {[string]} services
     */
    constructor(services: [string]);
    preferenceRepository: PreferenceRepository;
    /**
     * @type {[string]}
     */
    services: [string];
    /**
     * @return {ServiceResponse}
     */
    call(): ServiceResponse;
}
import { ServiceBase } from "../../base/service-base";
import { PreferenceRepository } from "../../repositories/preference-repository";
import { ServiceResponse } from "../../responses/service-response";
