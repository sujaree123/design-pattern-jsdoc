const { IDiscountStrategy } = require("./IDiscountStrategy");

/**
 * Class representing a flat discount strategy.
 */
class FlatDiscountStrategy extends IDiscountStrategy {
    /**
     * Create a FlatDiscountStrategy.
     * @param {number} discount - The flat discount amount.
     */
    constructor(discount) {
        super();
        this.discount = discount;
    }

    /**
     * Apply flat discount to the price.
     * @param {number} price - The original price.
     * @returns {number} The discounted price.
     */
    applyDiscount(price) {
        return price - this.discount;
    }
}

module.exports = { FlatDiscountStrategy };
