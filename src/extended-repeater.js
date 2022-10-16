const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
 function repestString(str, separator, times) {
  var newStr = ''
  if (times > 0) {
    for (let i = 0; i < times; i++) {
      newStr +=str;
      if (i !== times -1) {
        newStr += separator;
      }
    } 
  }else {
    newStr +=str;
  }
  return newStr;
}

function repeater(string, options) {
  if (string  === "undefined") return;
  const str = new String(string)
  const repeatTimes = options.repeatTimes;
  const separator = options.separator || '+';
  const addition= options.addition;
  const additionSeparator = options.additionSeparator || '|';
  const additionRepeatTimes = options.additionRepeatTimes;
	var additionStr = ''; 

  if (addition  !== "undefined") {
    var newAdd = new String(addition);
    additionStr = repestString(newAdd, additionSeparator, additionRepeatTimes);
  }
  
  var stringToAdd =  additionStr !== "undefined" ? str + additionStr : str;
 
  var newStr = repestString(stringToAdd, separator, repeatTimes);
    
  return newStr;
}

module.exports = {
  repeater
};
