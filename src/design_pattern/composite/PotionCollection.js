const Potion = require("../model/Potion");

/**
 * Composite class to manage a collection of potions.
 * @class
 */
class PotionCollection {
    constructor() {
        this.potions = [];
    }

    /**
     * Add potion to the collection.
     * @param {Potion} potion - The potion to add.
     */
    addPotion(potion) {
        this.potions.push(potion);
    }

    /**
     * Brew all potions in the collection.
     * @returns {string} The result of brewing all potions.
     */
    brew() {
        return this.potions.map(potion => potion.brew()).join("\n");
    }
}

module.exports = { PotionCollection };
