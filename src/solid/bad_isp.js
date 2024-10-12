/**
 * @interface BadMultiFunctionDevice
 * This interface violates ISP by forcing all devices to implement
 * methods they may not need.
 */
class BadMultiFunctionDevice {
    /**
     * Print a document.
     * @param {string} document
     */
    print(document) {
        throw new Error('Method not implemented.');
    }

    /**
     * Scan a document.
     * @param {string} document
     */
    scan(document) {
        throw new Error('Method not implemented.');
    }

    /**
     * Fax a document.
     * @param {string} document
     */
    fax(document) {
        throw new Error('Method not implemented.');
    }
}

/**
 * Class representing a basic printer.
 * Violates ISP because it must implement scan and fax methods even though it doesn't need them.
 * @extends BadMultiFunctionDevice
 */
class BadPrinter extends BadMultiFunctionDevice {
    print(document) {
        console.log(`Printing: ${document}`);
    }

    scan() {
        throw new Error('Printer cannot scan.');
    }

    fax() {
        throw new Error('Printer cannot fax.');
    }
}

/**
 * Class representing an advanced multi-function device.
 * Implements all the methods, which makes sense in this context.
 * @extends BadMultiFunctionDevice
 */
class BadMultiFunctionMachine extends BadMultiFunctionDevice {
    print(document) {
        console.log(`Printing: ${document}`);
    }

    scan(document) {
        console.log(`Scanning: ${document}`);
    }

    fax(document) {
        console.log(`Faxing: ${document}`);
    }
}

module.exports = { BadPrinter, BadMultiFunctionMachine };
