const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
 function minesweeper( matrix ) {
  if (!Array.isArray(matrix)) return;
  var newMatrix = [];
  var newRow = []
  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
      var sum = 0
      if (matrix[row][col + 1] && matrix[row][col + 1] === true) {
        sum++;
      }
      if (matrix[row + 1] && matrix[row + 1][col + 1] && matrix[row + 1][col + 1] === true) {
        sum++;
      }
      if (matrix[row + 1] && matrix[row + 1][col] && matrix[row + 1][col] === true) {
        sum++;
      }
      if (matrix[row + 1] && matrix[row + 1][col - 1] && matrix[row + 1][col - 1] === true) {
        sum++;
      }
      if (matrix[row][col - 1] && matrix[row][col - 1] === true) {
        sum++;
      }
      if (matrix[row-1] && matrix[row-1][col - 1] && matrix[row-1][col - 1] === true) {
        sum++;
      }
      if (matrix[row-1] && matrix[row-1][col] && matrix[row-1][col] === true) {
        sum++;
      }
      if (matrix[row-1] && matrix[row-1][col+1] && matrix[row-1][col+1] === true) {
        sum++;
      }
console.log(sum)
       newRow.push(sum)
      if (col === matrix[row].length - 1) {
        newMatrix.push(newRow);
        newRow = [];
      }
    }
    
  }
  return newMatrix
}



module.exports = {
  minesweeper
};
