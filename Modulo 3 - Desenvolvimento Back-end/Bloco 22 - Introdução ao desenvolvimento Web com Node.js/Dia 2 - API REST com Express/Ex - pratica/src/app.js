const express = require('express');
const { readFile, updateFile, modifyFile, deleteFileData } = require('./utils/fileService');

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

app.post('/movies', async (req, res) => {
  try {
    const newMovie = req.body;
    await updateFile('src/movies.json', newMovie);
    const movies = await readFile('src/movies.json');
    return res.status(201).json(movies);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: {
      status: 500,
      description: 'Internal Server Error',
    }});
  }
});

app.put('/movies/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const reqUpdate = req.body;
    await modifyFile('src/movies.json', id, reqUpdate);
    const movies = await readFile('src/movies.json');
    return res.status(201).json(movies);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: {
      status: 500,
      description: 'Internal Server Error',
    }});
  }
});

app.delete('/movies/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await deleteFileData('src/movies.json', id);
    const movies = await readFile('src/movies.json');
    return res.status(201).json(movies);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: {
      status: 500,
      description: 'Internal Server Error',
    }});
  }
});


module.exports = app;