const fs = require('fs').promises;

async function readFile(path) {
  try {
    const fileData = JSON.parse(await fs.readFile(path, 'utf-8'));
    return fileData;
  } catch (error) {
    console.error(error);
  }
}

async function updateFile(filePath, newItem, destPath) {
  try {
    const fileData = JSON.parse(await fs.readFile(filePath, 'utf-8'));
    newItem.id = fileData.length + 1;
    const updatedFile = [...fileData, newItem];
    await fs.writeFile(filePath ? filePath : destPath, JSON.stringify(updatedFile));
  } catch (error) {
    console.error(error);
    return error;
  }
}

module.exports = {
  readFile,
  updateFile
}