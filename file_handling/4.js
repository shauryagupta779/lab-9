const fs = require('fs');
const path = require('path');

function appendToFile(filePath, content) {
  try {
    fs.appendFileSync(filePath, content);
    console.log(`Content appended to '${filePath}' successfully`);
  } catch (error) {
    console.error(`Error appending to file: ${error.message}`);
  }
}

const filePath = path.join(__dirname, 'file1.txt');
appendToFile(filePath, '\nThis is an append operation');