const fs = require('fs');

function createDirectory(dirName) {
  try {
    if (!fs.existsSync(dirName)) {

      fs.mkdirSync(dirName);
      console.log(`Directory '${dirName}' created successfully`);
    } else {
      console.log(`Directory '${dirName}' already exists`);
    }
  } catch (error) {
    console.error(`Error creating directory: ${error.message}`);
  }
}

createDirectory('file_handling');