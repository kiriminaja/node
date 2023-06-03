const NodeCache = require("node-cache")
const configCache = new NodeCache()

/**
 * @param key
 * @return mixed
 */
const getCache = key => configCache.get(key)

/**
 * @param key
 * @param value
 * @return void
 */
const setCache = (key, value) => {
    configCache.set(key, value)
}

module.exports = {
    getCache,
    setCache
}
