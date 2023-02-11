import {ServiceResponseContract} from "../Responses/ServiceResponseContract";

export interface ServiceContract {
    call(): ServiceResponseContract
}
