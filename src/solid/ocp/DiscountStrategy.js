/**
 * Class representing a discount calculator.
 */
class DiscountCalculator {
    /**
     * Calculate the discount for a given price using a discount strategy.
     * @param {number} price - The original price.
     * @param {IDiscountStrategy} strategy - The discount strategy to apply.
     * @returns {number} The discounted price.
     */
    calculateDiscount(price, strategy) {
        return strategy.applyDiscount(price);
    }
}

module.exports = { DiscountCalculator };
