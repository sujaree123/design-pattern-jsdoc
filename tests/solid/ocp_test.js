import { expect, test } from "bun:test";
import { BadDiscountCalculator } from "../../src/solid/bad_ocp";
import { DiscountCalculator } from "../../src/solid/ocp/DiscountStrategy";
import { PercentageDiscountStrategy } from "../../src/solid/ocp/PercentageDiscountStrategy";
import { FlatDiscountStrategy } from "../../src/solid/ocp/FlatDiscountStrategy";
import { BuyOneGetOneDiscountStrategy } from "../../src/solid/ocp/BuyOneGetOneDiscountStrategy";

test("Bad! OCP", () => {
    const totalPrice = 100;
    const discountCalculator = new BadDiscountCalculator();
    const priceAfterDiscount = discountCalculator.calculateDiscount(totalPrice, 'percentage', 10)
    expect(priceAfterDiscount).toBe(90);
});

test("Good! OCP", () => {
    const totalPrice = 100;
    const discountCalculator = new DiscountCalculator();
    const percentageStrategy = new PercentageDiscountStrategy(10);
    const flatStrategy = new FlatDiscountStrategy(15);
    const bogoStrategy = new BuyOneGetOneDiscountStrategy();

    expect(discountCalculator.calculateDiscount(totalPrice, percentageStrategy)).toBe(90);
    expect(discountCalculator.calculateDiscount(totalPrice, flatStrategy)).toBe(85);
    expect(discountCalculator.calculateDiscount(totalPrice, bogoStrategy)).toBe(50);
});
