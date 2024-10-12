const { IBrewingStrategy } = require("./IBrewingStrategy");

/**
 * RapidBoilingStrategy class for brewing potions rapidly.
 * @class
 * @implements {IBrewingStrategy}
 */
class RapidBoilingStrategy extends IBrewingStrategy {
    brewPotion(potion) {
        return `${potion} brewed quickly with a rapid boil!`;
    }
}

module.exports = { RapidBoilingStrategy };
