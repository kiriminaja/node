interface ShippingContract {
    price(data: object)
    fullShippingPrice(data: object)
    schedules(): void
    requestPickup(data: object)
    payment(paymentId: string)
    cancel(awb: string, reason: string)
    tracking(orderId: string)
}
