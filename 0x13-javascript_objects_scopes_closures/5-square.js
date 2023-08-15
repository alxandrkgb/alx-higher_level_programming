const Rectangle = require('./4-rectangle');

class Square extends Rectangle {
  constructor(size) {
    super(size, size); // Call the constructor of the parent class
  }
}

module.exports = Square;
