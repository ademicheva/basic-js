const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
    // throw new CustomError('Not implemented');

    let cat = 0;

    for (let i = 0; i < matrix.length; i++) {
        for (let k = 0; k < matrix[i].length; k++) {
            if (matrix[i][k] == "^^") {
                cat++;
            }
        }
    }
    return cat;
};