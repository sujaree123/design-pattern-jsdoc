/**
 * Class representing a BadMemberManager.
 */
class BadMemberManager {
    /**
         * This is the constructor for the MemberManager.
         * It initializes an array to store members.
         *
         * @property {Array.<Member>} members - The array to store member objects.
         */
    constructor() {
        this.members = [];
    }

    /**
     * Add a member to the member list.
     * @param {string} name - The name of the member.
     * @param {number} age - The age of the member.
     * @param {string} role - The role of the member (e.g., admin, user).
     */
    addMember(name, age, role) {
        const member = { name, age, role };
        this.members.push(member);
    }

    /**
     * Get all members.
     * @returns {Array.<Member>} The array of members.
     */
    getMembers() {
        return this.members;
    }

    /**
     * Find a member by name.
     * @param {string} name - The name of the member to find.
     * @returns {Member|undefined} The member object, or undefined if not found.
     */
    findMember(name) {
        return this.members.find(member => member.name === name);
    }

    /**
         * Print all members' details to the console.
         */
    async printMembers() {
        if (this.members.length === 0) {
            await Bun.write(Bun.stdout, 'No members found.');
            return;
        }

        await Bun.write(Bun.stdout, 'Member List:\n');
        this.members.forEach(async member => {
            await Bun.write(Bun.stdout, `Name: ${member.name}, Age: ${member.age}, Role: ${member.role}`);
        });

        // for newline
        await Bun.write(Bun.stdout, '\n');
    }
}


/**
 * @typedef {Object} Member
 * @property {string} name - The name of the member.
 * @property {number} age - The age of the member.
 * @property {string} role - The role of the member.
 */

// Export the class using module.exports
module.exports = { BadMemberManager };
