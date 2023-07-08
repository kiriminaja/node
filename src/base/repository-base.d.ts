export class RepositoryBase {
    /**
     * @param {boolean} useInstant
     * @return {Api}
     */
    static api(useInstant?: boolean): Api;
}
import { Api } from "./api/api";
