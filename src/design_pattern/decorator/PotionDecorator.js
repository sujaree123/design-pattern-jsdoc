const Potion = require("../model/Potion");

/**
 * Abstract class representing a potion decorator.
 * Acts as a base for specific spell enchantments.
 */
class PotionDecorator {
    /**
     * @param {Potion} potion - The potion to be enchanted.
     */
    constructor(potion) {
        this.potion = potion;
    }

    /**
     * Brew the potion with any enchantments.
     * @returns {string} The brewed potion description with enchantments.
     */
    brew() {
        return this.potion.brew();
    }
}

module.exports = { PotionDecorator };
