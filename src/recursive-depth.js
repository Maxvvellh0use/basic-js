module.exports = class DepthCalculator {
    calculateDepth(arr) {
        if (!Array.isArray(arr)) {
            return false
        }
        let result = 0;
        arr.map(elem => {
            result = Math.max(this.calculateDepth(elem), result);
        });
        return result + 1;
    }
};


// let depth = new DepthCalculator;
// console.log(depth.calculateDepth([1, 2, 3, [8, [2]], 4, 5, []]), 3);