#!/usr/bin/node

exports.nbOccurences = function (list, searchElement) {
  // Use the filter function to count occurrences of searchElement in the list
  const occurrences = list.filter(element => element === searchElement);
  return occurrences.length;
};
