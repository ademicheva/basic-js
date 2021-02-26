const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
    if (date === undefined) {
        return 'Unable to determine the time of year!';
    }

    let monthCheck = date.getMonth();
    if (Object.prototype.toString.call(date) != '[object Date]') {
        throw new Error();
    } else if (monthCheck >= 2 && monthCheck <= 4) {
        return 'spring';
    } else if (monthCheck >= 5 && monthCheck <= 7) {
        return 'summer';
    } else if (monthCheck >= 8 && monthCheck <= 10) {
        return 'autumn';
    } else {
        return 'winter';
    }
};