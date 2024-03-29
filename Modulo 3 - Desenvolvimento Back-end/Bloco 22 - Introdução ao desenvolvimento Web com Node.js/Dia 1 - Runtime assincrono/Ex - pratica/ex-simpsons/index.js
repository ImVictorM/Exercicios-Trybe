const fs = require('fs').promises;

function getCharacterById(id) {
  const promise = new Promise(async (resolve, reject) => {
 
    const characters = JSON.parse(await fs.readFile('./simpsons.json', 'utf-8'));
    const chosenCharacter = characters.find(({ id: charId }) => Number(charId) === Number(id));
  
    chosenCharacter ? resolve(chosenCharacter) : reject('id não encontrado');
  });
  return promise;
}

async function readCharacters() {
  try {
    const characters = JSON.parse(await fs.readFile('./simpsons.json', 'utf-8'));
    characters.forEach(({ name, id }) => {
      console.log(`${id} - ${name}`);
    });
    
  } catch (error) {
    console.error(error);
  }
}

async function deleteSpecificCharacters() {
  try {
    const characters = JSON.parse(await fs.readFile('./simpsons.json', 'utf-8'));
    const newCharacters = characters.filter(({ id }) => Number(id) !== 6 && Number(id) !== 10);
    await fs.writeFile('./simpsons.json', JSON.stringify(newCharacters));
  } catch (error) {
    console.log(error);
  }
}

async function createNewFile() {
  try {
    const characters = JSON.parse(await fs.readFile('./simpsons.json', 'utf-8'));

    const newCharacters = characters.filter(({ id }) => Number(id) > 0 && Number(id) < 5);
  
    await fs.writeFile('./simpsonFamily.json', JSON.stringify(newCharacters))
  } catch (error) {
    console.log(error);
  }
}

async function addNewCharacter() {
  try {
    const characters = JSON.parse(await fs.readFile('./simpsonFamily.json', 'utf-8'));
    const newCharacter = {
      id: `${characters.length + 1}`,
      name: 'Nelson Muntz'
    };
    const newList = [...characters, newCharacter];
    await fs.writeFile('./simpsonFamily.json', JSON.stringify(newList));
  } catch (error) {
    console.log(error);
  }
}

async function changeNelson() {
  try {
    const characters = JSON.parse((await fs.readFile('./simpsonFamily.json', 'utf-8')));
    const excludeNelson = characters.filter(({ id }) => Number(id) !== 5);
    const newCharacter = {
      id: `${excludeNelson.length + 1}`,
      name: 'Maggie Simpson'
    };
    const newList = [...excludeNelson, newCharacter];
    await fs.writeFile('./simpsonFamily.json', JSON.stringify(newList));
  } catch (error) {
    console.log(error);
  }
}

async function main () {
  await changeNelson();
}

main();