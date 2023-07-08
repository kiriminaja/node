import {_cacheApiKey} from "./_cache-api-key";
import {_cacheMode} from "./_cache-mode";

export class _modeApiKey {
    /**
     * @return {_cacheApiKey}
     */
    apiKey() {
        return new _cacheApiKey()
    }

    /**
     * @return {_cacheMode}
     */
    mode() {
        return new _cacheMode()
    }
}
