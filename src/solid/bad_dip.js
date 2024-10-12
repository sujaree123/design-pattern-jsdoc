// Bad Example: High-level module directly depends on low-level module
/**
 * Class representing a payment service using PayPal.
 */
class BadPayPalPayment {
    /**
     * Process payment using PayPal.
     * @param {number} amount - The payment amount.
     */
    processPayment(amount) {
        console.log(`Processing PayPal payment of $${amount}`);
    }
}

/**
 * Class representing an order service that depends directly on PayPalPayment.
 */
class BadOrderService {
    /**
     * Create an order service with PayPal payment.
     */
    constructor() {
        this.paymentService = new BadPayPalPayment();
    }

    /**
     * Process an order payment.
     * @param {number} amount - The payment amount.
     */
    processOrder(amount) {
        this.paymentService.processPayment(amount);
    }
}

module.exports = { BadPayPalPayment, BadOrderService };
