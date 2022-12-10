const fs = require('fs').promises;
const { join } = require('path');

const readCacauTrybeFile = async () => {
  const path = '/files/cacauTrybeFile.json';
  try {
    const contentFile = await fs.readFile(join(__dirname, path), 'utf-8');
    return JSON.parse(contentFile);
  } catch (error) {
    return null;
  }
};

const getAllChocolates = async () => {
  const cacauTrybe = await readCacauTrybeFile();
  return cacauTrybe.chocolates;
};

const getChocolateById = async (id) => {
  const cacauTrybe = await readCacauTrybeFile();
  return cacauTrybe.chocolates
    .find((chocolate) => chocolate.id === id);
};

const getChocolatesByBrand = async (brandId) => {
  const cacauTrybe = await readCacauTrybeFile();
  return cacauTrybe.chocolates
    .filter((chocolate) => chocolate.brandId === brandId);
};

const getChocolatesQuantity = async () => {
  const { chocolates } = await readCacauTrybeFile();
  return {
    totalChocolates: chocolates.length
  };
};

const updateChocolateById = async (id, updatedItem) => {
  const path = '/files/cacauTrybeFile.json';
  const chocolates = await getAllChocolates();
  const indexToUpdate = chocolates.findIndex((choco) => Number(choco.id) === Number(id)) ;
  if (indexToUpdate < 0) {
    return indexToUpdate;
  } else {
    const newItem = {
      id: Number(id),
      ...updatedItem,
    }
    
    chocolates[indexToUpdate] = newItem;
    const updatedFile = await readCacauTrybeFile();
    updatedFile.chocolates = chocolates;
    await fs.writeFile(join(__dirname, path), JSON.stringify(updatedFile, null, 2));
    return {
      chocolate: chocolates[indexToUpdate]
    };
  }
  
};


module.exports = {
  getAllChocolates,
  getChocolateById,
  getChocolatesByBrand,
  getChocolatesQuantity,
  updateChocolateById
};