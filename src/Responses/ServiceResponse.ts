import {ServiceResponseContract} from "./ServiceResponseContract";

class ServiceResponse {
    private readonly response = {} as ServiceResponseContract

    constructor(response: ServiceResponseContract) {
        this.response = response
    }

    call(): object {
        return this.response
    }
}
