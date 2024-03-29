// const fetch = require('node-fetch');

// const fetchJoke = () => {
//   // const url = 'api.chucknorris.io/jokes/random?category=dev';
//   const url = 'https://api.chucknorris.io/jokes/random?category=dev';

//   const result = fetch(url) 
//     .then((response) => response.json())
//     .then((data) => data.value)
//     .catch((error) => `Algo deu errado :( \n${error}`);
//   console.log(result);
// }

// fetchJoke();

const fetch = require('node-fetch');

const fetchJoke = async () => {
  const url = 'https://api.chucknorris.io/jokes/random?category=dev';

  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data.value);
  } catch(error) {
    console.log(`Algo deu errado :( \n${error}`);
  }
}

fetchJoke();

