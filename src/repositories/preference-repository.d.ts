export class PreferenceRepository extends RepositoryBase {
    /**
     * @param {[string]} services
     * @return {Promise<(boolean|string)[]>}
     */
    setWhiteListExpedition(services: [string]): Promise<(boolean | string)[]>;
    /**
     * @param {string} url
     * @return {Promise<(boolean|string)[]>}
     */
    setCallback(url: string): Promise<(boolean | string)[]>;
}
import { RepositoryBase } from "../base/repository-base";
