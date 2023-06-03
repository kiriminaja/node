import {httpClient} from "./client"

const INSTANT_BASE_URL = ""
const EXPRESS_BASE_URL = ""

/**
 * @param baseUrl
 * @param endpoint
 * @return {Promise<axios.AxiosResponse<any>>}
 */
const get = (baseUrl, endpoint) => {
    return httpClient(baseUrl).get(endpoint)
}

/**
 * @param baseUrl
 * @param endpoint
 * @param data
 * @return {Promise<axios.AxiosResponse<any>>}
 */
const post = (baseUrl, endpoint, data = null) => {
    return httpClient(baseUrl).post(endpoint, data)
}

/**
 * @param baseUrl
 * @param endpoint
 * @param data
 * @return {Promise<axios.AxiosResponse<any>>}
 */
const put = (baseUrl, endpoint, data) => {
    return httpClient(baseUrl).put(endpoint, data)
}

/**
 * @param baseUrl
 * @param endpoint
 * @param data
 * @return {Promise<axios.AxiosResponse<any>>}
 *
 */
const deleteReq = (baseUrl, endpoint, data = null) => {
    return httpClient(baseUrl).delete(endpoint, data)
}


/**
 * @param useInstant
 * @return {{post(*, *): Promise<axios.AxiosResponse<*>>, get(*): Promise<axios.AxiosResponse<*>>, del(*, null=): Promise<axios.AxiosResponse<*>>, put(*, *): Promise<axios.AxiosResponse<*>>}|Promise<axios.AxiosResponse<*>>}
 * @constructor
 */
export const Api = (useInstant = false) => {
    const BASE_URL = useInstant ? INSTANT_BASE_URL : EXPRESS_BASE_URL
    return {
        post(endpoint, data) {
            return post(BASE_URL, endpoint, data)
        },
        get(endpoint) {
            return get(BASE_URL, endpoint)
        },
        put(endpoint, data) {
            return put(BASE_URL, endpoint, data)
        },
        del(endpoint, data = null) {
            return deleteReq(BASE_URL, endpoint, data)
        }
    }
}
