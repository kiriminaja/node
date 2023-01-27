class ServiceResponse {
    private readonly status?: boolean = false
    private readonly message?: string = 'Unknown Response'
    private readonly data?: object

    constructor(status: boolean, message: string, data?: object) {
        this.status = status
        this.message = message
        this.data = data
    }

    call(): object {
        return {
            status: this.status,
            message: this.message,
            data: this.data
        }
    }
}
