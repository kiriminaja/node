import {ServiceBase} from "../../base/service-base";
import {PreferenceRepository} from "../../repositories/preference-repository";

export class SetWhitelistExpeditionService extends ServiceBase {
    preferenceRepository = new PreferenceRepository()

    /**
     * @type {[string]}
     */
    services

    /**
     * @param {[string]} services
     */
    constructor(services) {
        super(services);
        this.services = services
    }

    /**
     * @return {ServiceResponse}
     */
    call() {
        try {
            const {status, message, result} = this.preferenceRepository.setWhiteListExpedition(this.services)
            if (!status) {
                return this.constructor.error(null, message)
            }
            return this.constructor.success(result, message)
        } catch (err) {
            return this.constructor.error(null, err.message)
        }
    }
}
