import {httpClient} from "./client"

/**
 * @param endpoint
 * @return {Promise<axios.AxiosResponse<any>>}
 */
const get = (endpoint) => {
    return httpClient.get(endpoint)
}

/**
 * @param endpoint
 * @param data
 * @return {Promise<axios.AxiosResponse<any>>}
 */
const post = (endpoint, data = null) => {
    return httpClient.post(endpoint, data)
}


/**
 * @param endpoint
 * @param data
 * @return {Promise<axios.AxiosResponse<any>>}
 */
const put = (endpoint, data) => {
    return httpClient.put(endpoint, data)
}

/**
 * @param endpoint
 * @param data
 * @return {Promise<axios.AxiosResponse<any>>}
 *
 */
const deleteReq = (endpoint, data = null) => {
    return httpClient.delete(endpoint, data)
}


/**
 * @return {{post: (function(*, null=): *), get: (function(*): *), put: (function(*, *): *)}}
 * @constructor
 */
export const Api = () => {
    return {
        put,
        post,
        get,
        delete: deleteReq
    }
}
