const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        switch (arr[i]) {
            case "--discard-next":
                i++;
                break;
            case "--discard-prev":
                if (arr[i - 2] !== '--discard-next') {
                    result.pop();
                }
                break;
            case "--double-next":
                if (arr[i + 1] !== undefined) {
                    result.push(arr[i + 1]);
                }
                break;
            case "--double-prev":
                if (arr[i - 2] !== '--discard-next' && arr[i - 1] !== undefined) {
                    result.push(result[result.length - 1]);
                }
                break;
            default:
                result.push(arr[i]);
                break;
        }
    }
    return result;
};