/**
 * PotionMaker class using a brewing strategy.
 * @class
 */
class CatPotionMaker {
    /**
     * @param {IBrewingStrategy} strategy - The brewing strategy to use.
     */
    constructor(strategy) {
        this.strategy = strategy;
    }

    /**
     * Brew potion using the set strategy.
     * @param {string} potion - The potion to brew.
     * @returns {string} The brewing result.
     */
    brewPotion(potion) {
        return this.strategy.brewPotion(potion);
    }
}

module.exports = { CatPotionMaker };
