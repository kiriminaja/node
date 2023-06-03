import axios from "axios";
import {KiriminAjaConfig} from "../../Config/kiriminajaconfig"

export const httpClient = (baseUrl) => {
    const client = axios.create({
        baseURL: baseUrl
    })

    client.defaults.headers.common['Authorization'] = `Bearer ${KiriminAjaConfig.apiKey}`
    client.defaults.headers.common['Content-Type'] = 'application/json'
    client.defaults.headers.common['Accept'] = 'application/json'
    return client
}
