#!/usr/bin/node

const fs = require('fs');
const args = process.argv.slice(2);

if (args.length !== 3) {
  console.error('Usage: ./102-concat.js fileA fileB fileC');
  process.exit(1);
}

const [fileA, fileB, fileC] = args;

// Read the contents of fileA
fs.readFile(fileA, 'utf8', (err, dataA) => {
  if (err) throw err;

  // Read the contents of fileB
  fs.readFile(fileB, 'utf8', (err, dataB) => {
    if (err) throw err;

    // Concatenate the contents of fileA and fileB
    const concatenatedData = dataA + dataB;

    // Write the concatenated data to fileC
    fs.writeFile(fileC, concatenatedData, 'utf8', (err) => {
      if (err) throw err;
      console.log(`The content of ${fileA} and ${fileB} has been concatenated and written to ${fileC}`);
    });
  });
});
