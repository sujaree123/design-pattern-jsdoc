const { IBrewingStrategy } = require("./IBrewingStrategy");

/**
 * SlowBrewingStrategy class for brewing potions slowly.
 * @class
 * @implements {IBrewingStrategy}
 */
class SlowBrewingStrategy extends IBrewingStrategy {
    brewPotion(potion) {
        return `${potion} brewed slowly with care!`;
    }
}

module.exports = { SlowBrewingStrategy };
