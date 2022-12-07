const fs = require('fs').promises;

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

readCharacters();