import {Api} from "./api/api";

export class RepositoryBase {
    constructor() {
        if (this.constructor === RepositoryBase) {
            throw new Error("Abstract classes can't be instantiated.");
        }
    }

    /**
     * @param {boolean} useInstant
     * @return {Api}
     */
    static api(useInstant = false) {
        return new Api(useInstant)
    }
}
