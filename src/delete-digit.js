const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  if (isNaN(n)) return;
  let largest = 0;
  let nString = n.toString().split('');
  for (let i = 0; i < nString.length; i++) {    
    let temp = [...nString];
    temp.splice(i,1);
    if (Number(temp.join('')) > largest) {
      largest = Number(temp.join(''));
    }
  }

  return largest;
}

module.exports = {
  deleteDigit
};
