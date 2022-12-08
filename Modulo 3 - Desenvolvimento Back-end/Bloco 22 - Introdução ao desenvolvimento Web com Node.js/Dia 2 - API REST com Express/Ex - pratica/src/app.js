const express = require('express');
const { readFile } = require('./utils/fileService');

const app = express();

app.use(express.json());

app.get('/movies/:id', async (req, res) => {
  const { id } = req.params;
  const movies = await readFile('src/movies.json');
  const reqMovie = movies.find((movie) => Number(movie.id) === Number(id));
  if (!reqMovie) {
    return res.status(404).json({ error: 'Not Found'});
  }
  return res.status(200).json(reqMovie);
});

// async function main() {
//   console.log(await readFile('src/movies.json'));
// }

// main();
module.exports = app;