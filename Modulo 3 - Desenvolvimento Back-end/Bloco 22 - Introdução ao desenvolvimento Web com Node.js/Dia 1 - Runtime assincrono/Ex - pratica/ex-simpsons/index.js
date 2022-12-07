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
  const characters = JSON.parse(await fs.readFile('./simpsons.json', 'utf-8'));
  const newCharacter = characters.filter(({ id }) => Number(id) !== 6 && Number(id) !== 10);
  await fs.writeFile('./simpsons.json', JSON.stringify(newCharacter));
}

async function main () {
  await deleteSpecificCharacters();
}

main();