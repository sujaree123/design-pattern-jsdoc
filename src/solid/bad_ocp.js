/**
 * Class representing a discount calculator.
 */
class BadDiscountCalculator {
    /**
     * Calculate the discount for a given price based on a type of discount.
     * @param {number} price - The original price.
     * @param {string} discountType - The type of discount ("percentage" or "flat").
     * @param {number} discountValue - The value of the discount.
     * @returns {number} The discounted price.
     */
    calculateDiscount(price, discountType, discountValue) {
        if (discountType === 'percentage') {
            return price - (price * discountValue / 100);
        } else if (discountType === 'flat') {
            return price - discountValue;
        } else {
            throw new Error('Invalid discount type');
        }
    }
}

module.exports = { BadDiscountCalculator };
