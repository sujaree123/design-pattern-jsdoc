/**
 * @interface IPaymentProcessor
 * @description Interface for payment processing.
 */
class IPaymentProcessor {
    /**
     * Process a payment.
     * @param {number} amount - The payment amount.
     */
    processPayment(amount) {
        throw new Error('Method not implemented.');
    }
}

export { IPaymentProcessor };
