import { describe, it, expect } from "bun:test";
import { CatPotionMaker } from "../../src/design_pattern/strategy/CatPotionMaker";
import { SlowBrewingStrategy } from "../../src/design_pattern/strategy/SlowBrewingStrategy";
import { RapidBoilingStrategy } from "../../src/design_pattern/strategy/RapidBoilingStrategy";

describe("Fantasy Cat Potion System - All Patterns Combined", () => {
    it("should create potion success use strategies", () => {
        // 2. Use Strategy Pattern for different brewing techniques
        const slowBrewCat = new CatPotionMaker(new SlowBrewingStrategy());
        const rapidBoilCat = new CatPotionMaker(new RapidBoilingStrategy());
        expect(slowBrewCat.brewPotion("Healing Potion")).toBe("Healing Potion brewed slowly with care!");
        expect(rapidBoilCat.brewPotion("Invisibility Potion")).toBe("Invisibility Potion brewed quickly with a rapid boil!");
    }),
    it("should brew potion miss", () => {
        const slowBrewCat = new CatPotionMaker(new SlowBrewingStrategy());
        const rapidBoilCat = new CatPotionMaker(new RapidBoilingStrategy());
        expect(slowBrewCat.brewPotion("Healing Potion")).not.toBe("Invisibility Potion brewed quickly with a rapid boil!");
        expect(rapidBoilCat.brewPotion("Invisibility Potion")).not.toBe("Healing Potion brewed slowly with care!");
    });
});
