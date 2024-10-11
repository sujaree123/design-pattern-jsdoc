import { expect, test } from "bun:test";
import { BadFullTimeEmployee, BadPartTimeEmployee } from "../../src/solid/bad_lsp";
import { FullTimeEmployee, PartTimeEmployee } from "../../src/solid/lsp/lsp";

test("Bad! LSP", () => {
    const fullTimeEmployee = new BadFullTimeEmployee(3000);
    const partTimeEmployee = new BadPartTimeEmployee(20, 100); // 20 per hour, 100 hour
    const partTimeEmployeeZeroHour = new BadPartTimeEmployee(20, 0);
    const partTimeEmployeeMinusFive = new BadPartTimeEmployee(20, -5);

    expect(fullTimeEmployee.getMonthlySalary()).toBe(3000);
    expect(partTimeEmployee.getMonthlySalary()).toBe(2000);
    expect(partTimeEmployeeZeroHour.getMonthlySalary()).toBe(0);
    expect(partTimeEmployeeMinusFive.getMonthlySalary()).toBe(-100);
});


test("Good! LSP", () => {
    const fullTimeEmployee = new FullTimeEmployee(3000);
    const partTimeEmployee = new PartTimeEmployee(20, 100); // 20 per hour, 100 hour
    const partTimeEmployeeZeroHour = new PartTimeEmployee(20, 0);
    const partTimeEmployeeMinusFive = new PartTimeEmployee(20, -5);

    expect(fullTimeEmployee.getMonthlySalary()).toBe(3000);
    expect(partTimeEmployee.getMonthlySalary()).toBe(2000);
    expect(partTimeEmployeeZeroHour.getMonthlySalary()).toBe(0);
    expect(partTimeEmployeeMinusFive.getMonthlySalary()).toBe(0);
});

