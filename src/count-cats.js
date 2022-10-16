const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function flattern(arr) {
  return arr.reduce((flat, toflattern) => {
    return flat.concat(Array.isArray(toflattern) ? flattern(toflattern) : toflattern);
  }, [])
}

function countCats( matrix ) {
  let num = 0;
  let newMatrix = flattern(matrix);

  return newMatrix.filter(item => item === '^^').length
}

module.exports = {
  countCats
};
