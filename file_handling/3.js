const fs = require('fs');
const path = require('path');

function createAndWriteFile(filePath, content) {
  try {
    fs.writeFileSync(filePath, content);
    console.log(`File '${filePath}' created and written successfully`);
  } catch (error) {
    console.error(`Error creating and writing to file: ${error.message}`);
  }
}

const filePath = path.join(__dirname, 'file1.txt');
createAndWriteFile(filePath, 'This is a write operation');