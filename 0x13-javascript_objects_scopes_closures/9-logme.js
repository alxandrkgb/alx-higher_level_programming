#!/usr/bin/node

let count = 0;

exports.logMe = function (item) {
  // Print the number of arguments already printed and the new argument value
  console.log(`${count}: ${item}`);
  
  // Increment the count for the next call
  count++;
};
