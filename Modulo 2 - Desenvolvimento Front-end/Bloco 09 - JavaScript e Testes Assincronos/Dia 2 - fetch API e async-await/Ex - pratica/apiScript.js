// apiScript.js
const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = () => {
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };
  const jokeElement = document.getElementById('jokeContainer');
  fetch(API_URL, myObject)
    .then((response) => response.json())
    .then(({ joke }) => jokeElement.innerText = joke)
};


window.onload = () => fetchJoke();