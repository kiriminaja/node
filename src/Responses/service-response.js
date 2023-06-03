export const ServiceResponse = (status, message, data = null) => {
    return {
        status: status,
        message: message,
        data: data
    }
}

const success = (message, data) => ServiceResponse(true, message, data)
const error = (message, data = null) => ServiceResponse(false, message, data)

export const Response = {
    success,
    error
}
