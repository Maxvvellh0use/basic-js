class VigenereCipheringMachine {
    constructor(direct = true) {
        this.direct = direct;
        return this;
    }

    encrypt(string, key) {
        if (string.length === 0 || key.length === 0) {
            throw Error();
        }
        const upperStr = string.toUpperCase();
        const upperKey = key.toUpperCase();
        const strWithoutGap = upperStr.replace(/\s/g, "");
        let upperKeyRepeat = upperKey.repeat(Math.ceil(strWithoutGap.length / upperKey.length));
        const upperStrArr = strWithoutGap.split('');
        const resultMap = upperStrArr.map(function (elem, index) {
            let upperStrSymbols = elem.charCodeAt(0) - 65;
            let upperKeyRepeatSymbols = upperKeyRepeat[index].charCodeAt(0) - 65;
            if (!/[a-z]/ig.test(elem)) {
                return elem
            } else if ((upperStrSymbols + upperKeyRepeatSymbols) < 26) {
                return elem = String.fromCharCode(upperStrSymbols + upperKeyRepeatSymbols + 65)
            } else if ((upperStrSymbols + upperKeyRepeatSymbols) >= 26) {
                return elem = String.fromCharCode(upperStrSymbols + upperKeyRepeatSymbols + 65 - 26)
            }
        });
        for (let i = 0; i < string.length; i++) {
            if (string[i] === ' ') {
                resultMap.splice(i, 0, ' ')
            }
        }
        if (!this.direct) {
            resultMap.reverse();
            return resultMap.join("");
        }
        return resultMap.join('')
    }

    decrypt(string, key) {
        if (string.length === 0 || key.length === 0) {
            throw Error();
        }
        const upperStr = string.toUpperCase();
        const upperKey = key.toUpperCase();
        const strWithoutGap = upperStr.replace(/\s/g, "");
        let upperKeyRepeat = upperKey.repeat(Math.ceil(strWithoutGap.length / upperKey.length));
        const upperStrArr = strWithoutGap.split('');
        const resultMap = upperStrArr.map(function (elem, index) {
            let upperStrSymbols = elem.charCodeAt(0) - 65;
            let upperKeyRepeatSymbols = upperKeyRepeat[index].charCodeAt(0) - 65;
            if (!/[a-z]/ig.test(elem)) {
                return elem
            }
            else if ((upperStrSymbols - upperKeyRepeatSymbols) < 0) {
                return elem = String.fromCharCode(upperStrSymbols - upperKeyRepeatSymbols + 65 + 26)
            }
            else if ((upperStrSymbols - upperKeyRepeatSymbols) >= 0) {
                return elem = String.fromCharCode(upperStrSymbols - upperKeyRepeatSymbols + 65)
            }
        });
        for (let i = 0; i < string.length; i++) {
            if (string[i] === ' ') {
                resultMap.splice(i, 0, ' ')
            }
        }
        if (!this.direct) {
            resultMap.reverse();
            return resultMap.join("");
        }
        return resultMap.join('')
    }
}

module.exports = VigenereCipheringMachine;
