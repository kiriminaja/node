import axios from "axios";
import {KiriminajaConfig} from "../../Config/kiriminaja-config"

export const httpClient = (baseUrl) => {
    const client = axios.create({
        baseURL: baseUrl
    })

    client.defaults.headers.common['Authorization'] = `Bearer ${KiriminajaConfig.apiKey}`
    client.defaults.headers.common['Content-Type'] = 'application/json'
    client.defaults.headers.common['Accept'] = 'application/json'
    return client
}
