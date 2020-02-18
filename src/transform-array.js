module.exports = function transform(arr ) {

    if (!Array.isArray(arr)) {
        throw new Error();
    }

    let resArr = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === '--discard-next') {
            i++;
        }
        else if (arr[i] === '--discard-prev') {
            resArr.pop();
        }
        else if (arr[i] === '--double-next') {
            if (i + 1 < arr.length) {
                resArr.push(arr[i + 1]);
            }
        }
        else if (arr[i] === '--double-prev') {
            if (i - 1 > 0) {
                resArr.push(arr[i - 1]);
            }
        }
        else {
            resArr.push(arr[i]);
        }
    }

    return resArr
};


// console.log(transform(  [0,0,'--discard-next', Infinity, 1, Infinity]));