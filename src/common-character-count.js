const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  var firstString = s1.split('');
  var secondString = s2.split('');
 
  var first;
  var second;
  if (firstString.length > secondString.length) {
    first = [...firstString];
    second = [...secondString];
  } else {
    first = [...secondString];
    second =  [...firstString];
  }
   var value = 0;
  for (let i = 0; i < first.length; i++) {
    console.log(first[i])
    for (let j = 0; j < second.length; j++) {
      console.log(first[i], second[j])
      if (first[i] === second[j]) {  		
        value++; 
        second.splice(j, 1);
        break
      }      
      
    }
  }
  return !value ? value === 0 ? 0 : false : value;

}

module.exports = {
  getCommonCharacterCount
};
