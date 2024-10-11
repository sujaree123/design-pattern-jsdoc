/**
 * Class representing an Employee.
 * @abstract
 */
class Employee {
    /**
     * Get the employee's monthly salary.
     * @returns {number} The monthly salary.
     */
    getMonthlySalary() {
        throw new Error('This method must be implemented by subclasses.');
    }
}

/**
 * Class representing a full-time employee.
 * @extends Employee
 */
class FullTimeEmployee extends Employee {
    /**
     * Create a full-time employee.
     * @param {number} salary - The monthly salary.
     */
    constructor(salary) {
        super();
        this.salary = salary;
    }

    /**
     * Get the full-time employee's monthly salary.
     * @returns {number} The monthly salary.
     */
    getMonthlySalary() {
        return this.salary;
    }
}

/**
 * Class representing a part-time employee.
 * @extends Employee
 */
class PartTimeEmployee extends Employee {
    /**
     * Create a part-time employee.
     * @param {number} hourlyRate - The hourly rate.
     * @param {number} hoursWorked - The number of hours worked in the month.
     */
    constructor(hourlyRate, hoursWorked) {
        super();
        this.hourlyRate = hourlyRate;
        this.hoursWorked = hoursWorked;
    }

    /**
     * Get the part-time employee's monthly salary.
     * Properly handles cases like zero or minimal hours worked.
     * @returns {number} The monthly salary.
     */
    getMonthlySalary() {
        if (this.hoursWorked <= 0) {
            return 0;  // Ensure valid salary even with no hours worked.
        }
        return this.hourlyRate * this.hoursWorked;
    }
}

module.exports = { FullTimeEmployee, PartTimeEmployee };
