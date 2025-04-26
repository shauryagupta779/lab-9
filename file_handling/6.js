const fs = require('fs');
const path = require('path');

function deleteFile(filePath) {
  try {
    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
      console.log(`File '${filePath}' deleted successfully`);
    } else {
      console.log(`File '${filePath}' does not exist`);
    }
  } catch (error) {
    console.error(`Error deleting file: ${error.message}`);
  }
}

const filePath = path.join(__dirname, 'file1.txt');
deleteFile(filePath);