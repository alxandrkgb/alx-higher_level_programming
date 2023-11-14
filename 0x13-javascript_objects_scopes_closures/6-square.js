#!/usr/bin/node

const Square = require('./5-square');

class SquareWithCharPrint extends Square {
  constructor(size) {
    // Call the constructor of Square using super()
    super(size);
  }

  charPrint(c) {
    // Use the character 'X' if c is undefined
    const printChar = c || 'X';

    // Create a loop to print the square using the specified character
    for (let i = 0; i < this.height; i++) {
      console.log(printChar.repeat(this.width));
    }
  }
}

module.exports = SquareWithCharPrint;
