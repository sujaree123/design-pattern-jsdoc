const { PotionDecorator } = require("./PotionDecorator");
/**
 * Agility Enchantment - Adds an agility spell to a potion.
 */
class AgilityEnchantment extends PotionDecorator {
    brew() {
        return `${this.potion.brew()} with an Agility spell!`;
    }
}

module.exports = { AgilityEnchantment };
