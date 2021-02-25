const CustomError = require("../extensions/custom-error");

module.exports = function countCats( /* matrix */ array) {
    throw new CustomError('Not implemented');

    let cat = 0;

    for (let i = 0; i < array.length; i++) {
        for (let k = 0; k < array[i].length; k++) {
            if (array[i] == "^^") {
                cat++;
            }
        }
    }
    return cat;
};