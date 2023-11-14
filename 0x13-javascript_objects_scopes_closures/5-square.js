#!/usr/bin/node

const Rectangle = require('./4-rectangle');

class Square extends Rectangle {
  constructor(size) {
    // Call the constructor of Rectangle using super()
    super(size, size);
  }
}

module.exports = Square;
