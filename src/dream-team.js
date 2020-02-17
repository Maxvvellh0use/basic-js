module.exports = function createDreamTeam(members) {
    if (!(members instanceof Array)) {
        return false
    }
    const filterMembers = members.filter(elem => /[a-z]/i.test(elem) === true && typeof elem === 'string');
    if (filterMembers.length === 0) {
        return false
    }
    const firstLetters = filterMembers.map(elem => String((elem).replace(/\s+/g, ''))[0]);
    const uppercaseLetters = firstLetters.join('').toUpperCase();
    return uppercaseLetters.split('').sort().join('');

};