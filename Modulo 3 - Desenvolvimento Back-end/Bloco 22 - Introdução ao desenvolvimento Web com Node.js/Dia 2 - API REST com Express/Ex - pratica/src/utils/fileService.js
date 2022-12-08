const fs = require('fs').promises;

async function readFile(path) {
  try {
    const fileData = JSON.parse(await fs.readFile(path, 'utf-8'));
    return fileData;
  } catch (error) {
    console.log(error)
  }
}

module.exports = {
  readFile
}