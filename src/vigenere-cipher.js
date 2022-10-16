const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
 class VigenereCipheringMachine {
  constructor(direct = true) {
    this.alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    this.square = [];
    this.direct = direct;
  }

  generateSquare() {
    for (let i = 0 ; i < this.alphabet.length; i++) {
      let row = this.alphabet.slice(i);
      row += this.alphabet.slice(0, i);
      this.square.push(row);
    }
  }

  repeatSting(key, string) {
    let result = '';
    let str = string.replace(/[^A-Za-z]/g, "");
    let keyLength = key.length;
    let it = 0;

    for (let i = 0; i < str.length; i++) {
      if (i % keyLength === 0) {
        it = 0;
      }
      result +=key[it];
      it ++;
    }
    return result;
  }

  encrypt(string, key) {
    if (!string || ! key || typeof string !== 'string' || typeof key !== 'string') throw new Error ('Incorrect arguments!');
    let encryptedMessage = '';
    let fullKey = this.repeatSting(key,string);
    this.generateSquare();
    
    let ind = 0
    string = string.toUpperCase();
    fullKey = fullKey.toUpperCase();
    
    for (let i = 0; i < string.length; i++) {
      let rowIndex = this.alphabet.indexOf(string[i]);
      if (rowIndex === -1) {
        encryptedMessage += string[i];
      } else {
        let colIndex = this.alphabet.indexOf(fullKey[ind]);
        encryptedMessage += this.square[rowIndex][colIndex];
        ind++; 
      }
    }
    
    return !this.direct ? encryptedMessage.split('').reverse().join('') : encryptedMessage;
  }


  decrypt(string, key) {
    if (!string || ! key || typeof string !== 'string' || typeof key !== 'string') throw new Error ('Incorrect arguments!');
    let decryptedMessage = '';
    let fullKey = this.repeatSting(key,string);
    this.generateSquare();
    
    let ind = 0
    string = string.toUpperCase();
    fullKey = fullKey.toUpperCase();

    for (let i = 0; i < string.length; i++) {
      let char = this.alphabet.indexOf(string[i]);
      if (char === -1) {
        decryptedMessage += string[i];
      } else {
        let rowIndex = this.alphabet.indexOf(fullKey[ind]);
       
        let colIndex = this.square[rowIndex].indexOf(string[i]);
        
        decryptedMessage += this.alphabet[colIndex];
        ind++; 
      }
    }
    
    return !this.direct ? decryptedMessage.split('').reverse().join('') : decryptedMessage;
  }
}

module.exports = {
  VigenereCipheringMachine
};

