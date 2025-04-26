const fs = require('fs');
const path = require('path');

function readAndPrintFile(filePath) {
  try {
    const data = fs.readFileSync(filePath, 'utf8');
    console.log('File contents:');
    console.log(data);
  } catch (error) {
    console.error(`Error reading file: ${error.message}`);
  }
}

const filePath = path.join(__dirname, 'file1.txt');
readAndPrintFile(filePath);