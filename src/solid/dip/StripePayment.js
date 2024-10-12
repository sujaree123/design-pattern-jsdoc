import { IPaymentProcessor } from "./IPaymentProcessor";

/**
 * Class representing a Stripe payment processor.
 * @implements {IPaymentProcessor}
 */
class StripePayment extends IPaymentProcessor {
    /**
     * Process payment using Stripe.
     * @param {number} amount - The payment amount.
     */
    processPayment(amount) {
        console.log(`Processing Stripe payment of $${amount}`);
    }
}

export { StripePayment };
