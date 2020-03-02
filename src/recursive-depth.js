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


