import {setCache, getCache} from "/Cache/cache"

const CACHE_TOKEN = "---KiriminAja-Cached-Api-Key---"
const CACHE_MODE = "---KiriminAja-Cached-Mode-Key---"

/**
 * @param key: string
 * @return void
 */
const setApiTokenKey = (key) => {
    setCache(CACHE_TOKEN, key)
}

/**
 * @param mode
 * @return void
 */
const setMode = (mode) => {
    setCache(CACHE_MODE, mode)
}

// GETTER
const mode = getCache(CACHE_MODE)
const apiKey = getCache(CACHE_TOKEN)

/**
 * @return {{mode: mixed, apiKey: mixed, setMode: setMode, setApiTokenKey: setApiTokenKey}}
 * @constructor
 */
export const KiriminajaConfig = () => {
    return {
        setApiTokenKey,
        setMode,
        mode,
        apiKey
    }
}
module.exports = KiriminajaConfig
