interface ServiceClientContract {
    get(endpoint: string, data: any)
    post(endpoint: string, data: any)
    put(endpoint: string, data: any)
    delete(endpoint: string, data: any)
}
