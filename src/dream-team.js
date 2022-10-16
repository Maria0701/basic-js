const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members ) {
  var newString = '';
  if (!Array.isArray(members) || members.length === 0) {
    return false;
  }

  var newArr = members.map((item) => {
    if (typeof item === 'string') {
      return item.replace(/[^a-zа-яё]/gi, '').charAt(0).toUpperCase();
    }
  })

  return newArr.sort().join('');
}

module.exports = {
  createDreamTeam
};
