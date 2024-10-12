import { expect, test } from "bun:test";
import { BadMultiFunctionMachine, BadPrinter } from "../../src/solid/bad_isp";
import { MultiFunctionMachine, Printer } from "../../src/solid/isp/isp";

test("Bad! ISP", () => {
    const printer = new BadPrinter();
    const machine = new BadMultiFunctionMachine();

    expect(() => printer.print('Document')).not.toThrowError();
    expect(() => printer.scan('Document')).toThrowError();
    expect(() => printer.fax('Document')).toThrowError();

    expect(() => machine.print('Document')).not.toThrowError();
    expect(() => machine.scan('Document')).not.toThrowError();
    expect(() => machine.fax('Document')).not.toThrowError();
});


test("Good! ISP", () => {
    const printer = new Printer();
    const machine = new MultiFunctionMachine();

    expect(() => printer.print('Document')).not.toThrowError();
    expect(printer.scan).toBeUndefined();
    expect(printer.fax).toBeUndefined();

    expect(() => machine.print('Document')).not.toThrowError();
    expect(() => machine.scan('Document')).not.toThrowError();
    expect(() => machine.fax('Document')).not.toThrowError();
});
