module.exports = function repeater(str, options) {
    if (typeof str !== 'string') {
        str = String(str);
    }
    if (options.separator === undefined) {
        options.separator = '+';
    }
    if (options.additionRepeatTimes === undefined) {
        options.additionRepeatTimes = 1;
    }
    if (options.additionSeparator === undefined) {
        options.additionSeparator = '';
    }
    if (options.addition === undefined) {
        options.additionRepeatTimes = 0;
    }
    if (options.repeatTimes === undefined) {
        options.repeatTimes = 1;
    }

    let result = '';
    for (let i = 0; i < options.repeatTimes; i++) {
        result = result + str;
        for (let s = 0; s < options.additionRepeatTimes; s++) {
            result = result + options.addition;
            if (s + 1 !== options.additionRepeatTimes)
                result = result + options.additionSeparator;
        }
        if (i + 1 !== options.repeatTimes)
            result = result + options.separator;
    }
    return result;
}


// repeater('STRING', { repeatTimes: 3, separator: '**', addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' });