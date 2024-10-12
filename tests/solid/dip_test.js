import { expect, jest, test } from "bun:test";
import { BadOrderService } from "../../src/solid/bad_dip";
import { OrderService } from "../../src/solid/dip/OrderService";
import { PayPalPayment } from "../../src/solid/dip/PaypalPayment";
import { StripePayment } from "../../src/solid/dip/StripePayment";

test("Bad! DIP", () => {
    const orderService = new BadOrderService();
    console.log = jest.fn(); // Mock console.log

    orderService.processOrder(100);
    expect(console.log).toHaveBeenCalledWith('Processing PayPal payment of $100');
});


test("Good! DIP", () => {
    const paypalPayment = new PayPalPayment();
    const paypalOrderService = new OrderService(paypalPayment);
    console.log = jest.fn(); // Mock console.log

    paypalOrderService.processOrder(100);
    expect(console.log).toHaveBeenCalledWith('Processing PayPal payment of $100');

    // can refactor this with seperate test case for this case.
    const stripePayment = new StripePayment();
    const stripeOrderService = new OrderService(stripePayment);
    console.log = jest.fn(); // Mock console.log

    stripeOrderService.processOrder(200)
    expect(console.log).toHaveBeenCalledWith('Processing Stripe payment of $200');
});
