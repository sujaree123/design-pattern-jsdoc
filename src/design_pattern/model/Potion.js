/**
 * Potion class representing a single potion.
 * @class
 */
class Potion {
    /**
     * @param {string} potion - The potion description.
     */
    constructor(potion) {
        this.potion = potion;
    }

    /**
     * Brew the potion.
     * @returns {string} The brewed potion.
     */
    brew() {
        return `${this.potion} brewed!`;
    }
}


module.exports = { Potion };
