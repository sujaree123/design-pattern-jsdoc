const { IDiscountStrategy } = require("./IDiscountStrategy");

/**
 * Class representing a percentage discount strategy.
 */
class PercentageDiscountStrategy extends IDiscountStrategy {
    /**
     * Create a PercentageDiscountStrategy.
     * @param {number} discount - The discount percentage.
     */
    constructor(discount) {
        super();
        this.discount = discount;
    }

    /**
     * Apply percentage discount to the price.
     * @param {number} price - The original price.
     * @returns {number} The discounted price.
     */
    applyDiscount(price) {
        return price - (price * this.discount / 100);
    }
}

module.exports = { PercentageDiscountStrategy };
