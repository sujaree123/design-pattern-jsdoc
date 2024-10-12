import { IPaymentProcessor } from "./IPaymentProcessor";

/**
 * Class representing a PayPal payment processor.
 * @implements {IPaymentProcessor}
 */
class PayPalPayment extends IPaymentProcessor {
    /**
     * Process payment using PayPal.
     * @param {number} amount - The payment amount.
     */
    processPayment(amount) {
        console.log(`Processing PayPal payment of $${amount}`);
    }
}

export { PayPalPayment };
