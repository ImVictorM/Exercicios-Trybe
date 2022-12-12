const express = require('express');
const { validateTeam, existingId } = require('./middlewares');

const app = express();

app.use(express.json());

const teams = [
  {
    id: 1,
    name: 'São Paulo Futebol Clube',
    initials: 'SPF',
  },
  {
    id: 2,
    name: 'Clube Atlético Mineiro',
    initials: 'CAM',
  },
];

app.get('/', (req, res) => res.status(200).json({ message: 'Olá Mundo!' }));

app.get('/teams', (req, res) => res.status(200).json({ teams }));

app.post('/teams', (req, res) => {
  const newTeam = { ...req.body };
  teams.push(newTeam);
  res.status(201).json({ team: newTeam });
});

app.put('/teams/:id', existingId, validateTeam, (req, res) => {
  const { id } = req.params;
  const { name, initials } = req.body;
  const updateTeam = teams.find(({ id: teamId }) => Number(teamId) === Number(id));

  updateTeam.name = name;
  updateTeam.initials = initials;

  return res.status(200).json({ updateTeam });
});



app.get('/teams/:id', existingId, (req, res) => {
  const { id } = req.params;
  const findTeam = teams.find(({ id: teamId }) => Number(teamId) === Number(id));
  return res.status(200).json({ findTeam });
});

app.delete('/teams/:id', existingId, (req, res) => {
  const { id } = req.params;

  const arrayPosition = teams.findIndex((team) => team.id === Number(id));
  teams.splice(arrayPosition, 1);

  return res.status(200).end();
});
module.exports = app;
