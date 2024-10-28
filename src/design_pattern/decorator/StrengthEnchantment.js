const { PotionDecorator } = require("./PotionDecorator");
/**
 * Strength Enchantment - Adds a strength spell to a potion.
 */
class StrengthEnchantment extends PotionDecorator {
    brew() {
        return `${this.potion.brew()} with a Strength spell!`;
    }
}

module.exports = { StrengthEnchantment };
