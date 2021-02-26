const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
    let teamName = [];
    if (typeof members !== 'object' || !members) {
        return false;
    }
    for (let i = 0; i < members.length; i++) {
        if (typeof members[i] == 'string') {
            members[i] = members[i].trim().toUpperCase();
            teamName.push(members[i][0]);
        } else {
            continue;
        }
    }
    return teamName.sort().join('');
};