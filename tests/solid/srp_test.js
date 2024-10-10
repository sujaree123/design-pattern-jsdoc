import { expect, test } from "bun:test";
import { BadMemberManager } from "../../src/solid/bad_srp";
import { MemberStorage } from "../../src/solid/srp/MemberStorage";
import { Member } from "../../src/solid/srp/Member";
import { MemberPrinter } from "../../src/solid/srp/MemberPrinter";

test("Bad! SRP", () => {
    const memberManager = new BadMemberManager();
    memberManager.addMember('Minji', 30, 'Rapper');
    memberManager.addMember('Hanni', 25, 'Vocalist');
    memberManager.addMember('Danielle', 25, '-');
    memberManager.addMember('Haerin', 25, '-');
    memberManager.addMember('Hyein', 25, 'Maknae');

    // if need to display print member method.
    // memberManager.printMembers();

    const nonExistentMember = memberManager.findMember('Alice');
    const haerinSearch = 'Haerin';
    const existentMember = memberManager.getMembers().find(member => member.name == haerinSearch);

    expect(memberManager.getMembers().length).toBe(5);
    expect(nonExistentMember).toBeUndefined();
    expect(memberManager.findMember(haerinSearch)).toBe(existentMember);
});


test("Good! SRP", () => {
    const memberStorage = new MemberStorage();
    const member1 = new Member('Minji', 30, 'Rapper');
    const member2 = new Member('Hanni', 25, 'Vocalist');
    const member3 = new Member('Danielle', 25, '-');
    const member4 = new Member('Haerin', 25, '-');
    const member5 = new Member('Hyein', 25, 'Maknae');

    memberStorage.addMember(member1);
    memberStorage.addMember(member2);
    memberStorage.addMember(member3);
    memberStorage.addMember(member4);
    memberStorage.addMember(member5);

    // if need to display print member method.
    //MemberPrinter.printMembers(memberStorage.getMembers());

    const nonExistentMember = memberStorage.findMember('Alice');
    const haerinSearch = 'Haerin';
    const existentMember = memberStorage.getMembers().find(member => member.name == haerinSearch);

    expect(memberStorage.getMembers().length).toBe(5);
    expect(nonExistentMember).toBeUndefined();
    expect(memberStorage.findMember(haerinSearch)).toBe(existentMember);
});
