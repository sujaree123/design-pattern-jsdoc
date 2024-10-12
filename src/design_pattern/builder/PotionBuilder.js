/**
 * Builder class to construct potions step by step.
 * @class
 */
class PotionBuilder {
    constructor() {
        this.ingredients = [];
    }

    /**
     * Add ingredient to potion.
     * @param {string} ingredient - The ingredient to add.
     * @returns {PotionBuilder} The current potion builder.
     */
    addIngredient(ingredient) {
        this.ingredients.push(ingredient);
        return this;
    }

    /**
     * Brew the potion with the added ingredients.
     * @returns {string} The brewed potion.
     */
    brewPotion() {
        return `Potion made with ${this.ingredients.join(", ")}`;
    }
}

module.exports = { PotionBuilder };

