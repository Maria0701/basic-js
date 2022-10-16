const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    /*throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here*/
    if (arr.filter(item => Array.isArray(item)).length !== 0) {
      this.depth = 1 +  this.calculateDepth([].concat(...arr.filter(item => Array.isArray(item))))
    } else {
   	this.depth = 1;
    }
    
    return this.depth;
  }
}

module.exports = {
  DepthCalculator
};
