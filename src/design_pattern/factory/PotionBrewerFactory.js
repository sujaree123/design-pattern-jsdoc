const {HealingPotionBrewer } =  require("./HealingPotionBrewer");
const { InvisibilityPotionBrewer } = require("./InvisibilityPotionBrewer");

/**
 * Factory to create Potion Brewers.
 * @class
 */
class PotionBrewerFactory {
    /**
     * Create a potion brewer based on type.
     * @param {string} type - The type of potion brewer (e.g., "healing", "invisibility").
     * @returns {PotionBrewer} The created potion brewer.
     */
    static createPotionBrewer(type) {
        if (type === "healing") {
            return new HealingPotionBrewer();
        } else if (type === "invisibility") {
            return new InvisibilityPotionBrewer();
        }
        throw new Error("Unknown potion type");
    }
}

module.exports = { PotionBrewerFactory };
