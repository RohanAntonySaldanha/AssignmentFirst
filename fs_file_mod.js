const fs = require('fs');

async function createFile() {
  try {
    const data = 'Promise successful!'; // data to be written to file
    await fs.promises.writeFile('demo.txt', data);
    console.log('File created and content written');
  } catch (err) {
    console.error(err);
  }
}

createFile();