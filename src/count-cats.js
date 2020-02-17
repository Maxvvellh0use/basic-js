module.exports = function countCats(matrix) {
    const concatMatrix = matrix.concat(...matrix);
    const filterMatrix = concatMatrix.filter(elem => elem === '^^');
    return filterMatrix.length;

};

// console.log(countCats([
//     ['##', 'dd', '00'],
//     ['^^', '..', 'ss'],
//     ['AA', 'dd', '^^'],
// ]));
