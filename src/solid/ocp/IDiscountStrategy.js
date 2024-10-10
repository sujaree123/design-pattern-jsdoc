/**
 * Interface representing a discount strategy.
 * @interface
 */
class IDiscountStrategy {
    /**
     * Apply discount to the price.
     * @param {number} price - The original price.
     * @returns {number} The discounted price.
     */
    applyDiscount(price) {
        throw new Error("Method 'applyDiscount' must be implemented.");
    }
}

module.exports = { IDiscountStrategy };
