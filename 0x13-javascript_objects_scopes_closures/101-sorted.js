#!/usr/bin/node

const { dict } = require('./101-data');

// Create a new dictionary with user ids grouped by the number of occurrences
const sortedDict = Object.entries(dict).reduce((result, [userId, occurrences]) => {
  result[occurrences] = result[occurrences] || [];
  result[occurrences].push(userId);
  return result;
}, {});

console.log(sortedDict);
