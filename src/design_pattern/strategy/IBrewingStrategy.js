/**
 * Interface for brewing strategies.
 * @interface
 */
class IBrewingStrategy {
    /**
     * Brew potion with a specific strategy.
     * @param {string} potion - The potion to brew.
     * @returns {string} The brewing result.
     */
    brewPotion(potion) {
        throw new Error("This method should be implemented by subclasses");
    }
}

module.exports = { IBrewingStrategy };
