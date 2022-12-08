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
    const fileData = await readFile(filePath);
    newItem.id = fileData.length + 1;
    const updatedFile = [...fileData, newItem];
    await fs.writeFile(filePath ? filePath : destPath, JSON.stringify(updatedFile));
  } catch (error) {
    console.error(error);
    return error;
  }
}

async function modifyFile(path, id, newItem) {
  try {
    const fileData = await readFile(path);
    const indexToModify = fileData.findIndex((element) => Number(element.id) === Number(id));
    fileData[indexToModify] = newItem;
    await fs.writeFile(path, JSON.stringify(fileData));
  } catch (error) {
    console.error(error);
    return error;
  }
}

async function deleteFileData(path, id) {
  try {
    const fileData = await readFile(path);
    const updatedFile = fileData.filter((element) => Number(element.id) !== Number(id));
    await fs.writeFile(path, JSON.stringify(updatedFile));
  } catch (error) {
    console.error(error);
    return error;
  }
}

module.exports = {
  readFile,
  updateFile,
  modifyFile,
  deleteFileData
}