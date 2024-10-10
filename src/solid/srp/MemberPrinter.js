/**
 * Class responsible for printing member details to the console.
 */
class MemberPrinter {
    /**
     * Print all members' details to the console.
     * @param {Array.<Member>} members - The list of members to print.
     */
    static async printMembers(members) {
        if (members.length === 0) {
            await Bun.write(Bun.stdout, 'No members found.');
            return;
        }

        await Bun.write(Bun.stdout, 'Member List:\n');
        for (const member of members) {
            await Bun.write(Bun.stdout, `Name: ${member.name}, Age: ${member.age}, Role: ${member.role}\n`);
        }
    }
}

module.exports = { MemberPrinter };
