/**
 * Class representing a Member.
 */
class Member {
    /**
     * Create a member.
     * @param {string} name - The name of the member.
     * @param {number} age - The age of the member.
     * @param {string} role - The role of the member.
     */
    constructor(name, age, role) {
        this.name = name;
        this.age = age;
        this.role = role;
    }
}

module.exports = { Member };
