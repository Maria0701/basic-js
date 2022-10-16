const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
var wordsArr = ['--discard-next' , '--discard-prev', '--double-next', '--double-prev'];

function transform( arr ) {
  if (!Array.isArray(arr)) throw new Error ("'arr' parameter must be an instance of the Array!");
  var newArr = [];
  var newIds = 0;

  arr.forEach((item, id) => {

    if (!wordsArr.includes(item) && arr[id-1] !== '--discard-next') {
      newArr.push(item);
      newIds++;
    }
    
    if (item === '--discard-prev' && id !== 0 && arr[id - 2] !== '--discard-next') {
      newArr.pop()
      newIds--;
    }

    if (item === '--double-next' && id !== arr.length-1 ) {
      newArr.push(arr[id + 1])
      newIds++
    }

    if (item === '--double-prev' && id !== 0 && arr[id - 2] !== '--discard-next') {
      newArr.push(newArr[newIds - 1])
      newIds--
    }

  })


  return newArr;
}

module.exports = {
  transform
};
