import {ServiceBase} from "../../base/service-base";
import {ServiceResponse} from "../../responses/service-response";
import {PreferenceRepository} from "../../repositories/preference-repository";

export class SetCallbackService extends ServiceBase {
    /**
     * @type {PreferenceRepository}
     */
    preferenceRepository = new PreferenceRepository()
    /**
     * @type {string}
     */
    url

    /**
     * @param {string} url
     */
    constructor(url) {
        super();
        this.url = url
    }

    /**
     * @return {ServiceResponse}
     */
    call() {
        try {
            const {status, message, result} = this.preferenceRepository.setCallback(this.url)
            if (!status) {
                return this.constructor.error(null, message)
            }
            return this.constructor.success(result, message)
        } catch (err) {
            return this.constructor.error(null, err.message)
        }
    }
}
