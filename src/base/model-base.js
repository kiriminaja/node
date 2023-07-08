import {getObjectVars} from "../utils/helper";

export class ModelBase {
    constructor() {
        if (this.constructor === ModelBase) {
            throw new Error("Abstract classes can't be instantiated.");
        }
    }

    /**
     * @return {?object}
     */
    toArray() {
        return getObjectVars(this)
    }
}
