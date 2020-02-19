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
                resArr.push(arr[i + 1]);

        }
        else if (arr[i] === '--double-prev') {
                resArr.push(arr[i - 1]);

        }
        else {
            resArr.push(arr[i]);
        }
    }

    return resArr.filter(elem => elem !== undefined)
};


// console.log(transform(  [0,0,'--discard-next', Infinity, 1, Infinity]));