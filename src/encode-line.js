const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let newStr = str.split('');
  let res = '';
  let num = 1; 
  
  for (let i = 0; i < newStr.length; i++) {
    if (newStr[i + 1] === newStr[i]) {
      num++;
    } else {
      if (num === 1) num = '';
      res = res + num + newStr[i];
      num = 1;
    }
  }
  return res;
}

module.exports = {
  encodeLine
};
