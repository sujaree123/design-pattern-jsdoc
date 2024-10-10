/**
 * Class responsible for storing and managing members.
 */
class MemberStorage {
    /**
     * Create a new MemberStorage instance.
     */
    constructor() {
        this.members = [];
    }

    /**
     * Add a member to the storage.
     * @param {Member} member - The member to add.
     */
    addMember(member) {
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
}

module.exports = { MemberStorage };
