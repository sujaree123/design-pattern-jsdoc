import { describe, it, expect, test } from "bun:test";
import { PotionBrewerFactory } from "../../src/design_pattern/factory/PotionBrewerFactory";
import { PotionCollection } from "../../src/design_pattern/composite/PotionCollection";
import { PotionBuilder } from "../../src/design_pattern/builder/PotionBuilder";
import { CatPotionMaker } from "../../src/design_pattern/strategy/CatPotionMaker";
import { SlowBrewingStrategy } from "../../src/design_pattern/strategy/SlowBrewingStrategy";
import { RapidBoilingStrategy } from "../../src/design_pattern/strategy/RapidBoilingStrategy";
import { Potion } from "../../src/design_pattern/model/Potion";
import { StrengthEnchantment } from "../../src/design_pattern/decorator/StrengthEnchantment";
import { AgilityEnchantment } from "../../src/design_pattern/decorator/AgilityEnchantment";


describe("Fantasy Cat Potion System - All Patterns Combined", () => {
    it("should create potion brewers, build potions, use strategies, and brew a collection", () => {
        // 1. Create potion brewers using Factory Pattern
        const healingCat = PotionBrewerFactory.createPotionBrewer("healing");
        const invisibilityCat = PotionBrewerFactory.createPotionBrewer("invisibility");
        expect(healingCat.brew()).toBe("Healing Potion brewed by a cat!");
        expect(invisibilityCat.brew()).toBe("Invisibility Potion brewed by a cat!");

        // 2. Use Strategy Pattern for different brewing techniques
        const slowBrewCat = new CatPotionMaker(new SlowBrewingStrategy());
        const rapidBoilCat = new CatPotionMaker(new RapidBoilingStrategy());
        expect(slowBrewCat.brewPotion("Healing Potion")).toBe("Healing Potion brewed slowly with care!");
        expect(rapidBoilCat.brewPotion("Invisibility Potion")).toBe("Invisibility Potion brewed quickly with a rapid boil!");

        // 3. Build potions using Builder Pattern
        const healingPotion = new PotionBuilder().addIngredient("Unicorn Horn").addIngredient("Fairy Dust").brewPotion();
        const invisibilityPotion = new PotionBuilder().addIngredient("Chameleon Scale").addIngredient("Moonlight Dew").brewPotion();
        expect(healingPotion).toBe("Potion made with Unicorn Horn, Fairy Dust");
        expect(invisibilityPotion).toBe("Potion made with Chameleon Scale, Moonlight Dew");

        // 4. Use Composite Pattern for a collection of potions
        const potionCollection = new PotionCollection();
        potionCollection.addPotion(new Potion(healingPotion));
        potionCollection.addPotion(new Potion(invisibilityPotion));
        expect(potionCollection.brew()).toBe(
            "Potion made with Unicorn Horn, Fairy Dust brewed!\nPotion made with Chameleon Scale, Moonlight Dew brewed!"
        );

        // 5. Apply brewing strategies to built potions
        expect(slowBrewCat.brewPotion(healingPotion)).toBe("Potion made with Unicorn Horn, Fairy Dust brewed slowly with care!");
        expect(rapidBoilCat.brewPotion(invisibilityPotion)).toBe("Potion made with Chameleon Scale, Moonlight Dew brewed quickly with a rapid boil!");

        // 6. Apply Decorator Pattern to add enchantments
        const strengthPotion = new StrengthEnchantment(new Potion(healingPotion));
        const agilityPotion = new AgilityEnchantment(new Potion(invisibilityPotion));
        expect(strengthPotion.brew()).toBe("Potion made with Unicorn Horn, Fairy Dust brewed! with a Strength spell!");
        expect(agilityPotion.brew()).toBe("Potion made with Chameleon Scale, Moonlight Dew brewed! with an Agility spell!");
    });
});
