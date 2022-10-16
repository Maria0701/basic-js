const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
const getSumm = (arr) => {
  const newArr = arr.toString().split('');
  return newArr.map(it => parseInt(it)).reduce((a,b) => a+b,0) 
}

function getSumOfDigits( n ) {
  if (isNaN(n)) return;
  
  var newNum = n;
  while (newNum > 9) {
    newNum = getSumm(newNum);
  }

  return newNum;
  
}

module.exports = {
  getSumOfDigits
};
