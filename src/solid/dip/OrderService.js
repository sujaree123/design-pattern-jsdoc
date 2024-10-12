/**
 * Class representing an order service that depends on an abstract PaymentProcessor.
 */
class OrderService {
    /**
     * Create an order service with a payment processor.
     * @param {PaymentProcessor} paymentProcessor - The payment processor instance.
     */
    constructor(paymentProcessor) {
        this.paymentProcessor = paymentProcessor;
    }

    /**
     * Process an order payment.
     * @param {number} amount - The payment amount.
     */
    processOrder(amount) {
        this.paymentProcessor.processPayment(amount);
    }
}

export { OrderService };
