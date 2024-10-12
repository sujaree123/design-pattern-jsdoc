/**
 * @interface PrinterDevice
 * A specific interface for printing.
 */
class PrinterDevice {
    /**
     * Print a document.
     * @param {string} document
     */
    print(document) {
        throw new Error('Method not implemented.');
    }
}

/**
 * @interface ScannerDevice
 * A specific interface for scanning.
 */
class ScannerDevice {
    /**
     * Scan a document.
     * @param {string} document
     */
    scan(document) {
        throw new Error('Method not implemented.');
    }
}

/**
 * @interface FaxDevice
 * A specific interface for faxing.
 */
class FaxDevice {
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
 * Adheres to ISP because it only implements PrinterDevice.
 * @implements {PrinterDevice}
 */
class Printer extends PrinterDevice {
    print(document) {
        console.log(`Printing: ${document}`);
    }
}

/**
 * Class representing an advanced multi-function device.
 * Adheres to ISP by implementing all the required interfaces.
 * @implements {PrinterDevice}
 * @implements {ScannerDevice}
 * @implements {FaxDevice}
 */
class MultiFunctionMachine extends PrinterDevice {
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

module.exports = { Printer, MultiFunctionMachine };
