class Rectangle {
  constructor(w, h) {
    if (w <= 0 || h <= 0) {
      return {}; // Create an empty object if w or h is not a positive integer
    }

    this.width = w;
    this.height = h;
  }

  print() {
    for (let i = 0; i < this.height; i++) {
      console.log('X'.repeat(this.width));
    }
  }
}

module.exports = Rectangle;
