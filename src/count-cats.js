module.exports = function countCats(matrix) {
    const concatMatrix = matrix.concat(...matrix);
    const filterMatrix = concatMatrix.filter(elem => elem === '^^');
    return filterMatrix.length;

};

