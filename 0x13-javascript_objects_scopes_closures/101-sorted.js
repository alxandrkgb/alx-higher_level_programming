#!/usr/bin/node
  
const data = require('./101-data');

const occurrencesById = data.dict;
const idsByOccurrence = {};

for (const userId in occurrencesById) {
  const occurrence = occurrencesById[userId];
  if (idsByOccurrence[occurrence] === undefined) {
    idsByOccurrence[occurrence] = [];
  }
  idsByOccurrence[occurrence].push(userId);
}

console.log(idsByOccurrence);
