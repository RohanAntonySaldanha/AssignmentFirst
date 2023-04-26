const fs = require('fs');

async function createFile() {
  try {
    const data = 'Promise successful!'; // information to be displayed in the file
    await fs.promises.writeFile('demo.txt', data); //writes contents of date variable to the specified file
    console.log('File created and content written');
  } catch (err) {
    console.error(err);
  }
}

createFile();