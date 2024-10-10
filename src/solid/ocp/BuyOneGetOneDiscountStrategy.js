const { IDiscountStrategy } = require("./IDiscountStrategy");

/**
 * Class representing a BuyOneGetOne discount strategy.
 */
class BuyOneGetOneDiscountStrategy extends IDiscountStrategy {
    /**
     * Apply Buy One Get One discount.
     * @param {number} price - The original price.
     * @returns {number} The discounted price.
     */
    applyDiscount(price) {
        return price / 2;  // Buy One, Get One Free scenario.
    }
}

module.exports = { BuyOneGetOneDiscountStrategy };
