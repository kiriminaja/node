import {RepositoryBase} from "../base/repository-base";

export class PreferenceRepository extends RepositoryBase {
    /**
     * @param {[string]} services
     * @return {Promise<(boolean|string)[]>}
     */
    setWhiteListExpedition(services) {
        return this.constructor.api().post("api/mitra/v3/set_whitelist_services", {
            services: services
        })
    }

    /**
     * @param {string} url
     * @return {Promise<(boolean|string)[]>}
     */
    setCallback(url) {
        return this.constructor.api().post('api/mitra/set_callback', {
            url: url
        })
    }
}
