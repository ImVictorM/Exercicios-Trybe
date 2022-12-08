const express = require('express');
const { readFile } = require('./utils/fileService');

const app = express();

app.use(express.json());

app.get('/movies/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const movies = await readFile('src/movies.json');
    const reqMovie = movies.find((movie) => Number(movie.id) === Number(id));
    if (!reqMovie) {
      return res.status(404).json({ error: 'Not Found'});
    }
    return res.status(200).json(reqMovie);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: {
      status: 500,
      description: 'Internal Server Error',
    }});
  }
  
});

app.get('/movies', async (req, res) => {
  try {
    const movies = await readFile('src/movies.json');
    return res.status(200).json(movies);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: {
      status: 500,
      description: 'Internal Server Error',
    }});
  } 
});


module.exports = app;