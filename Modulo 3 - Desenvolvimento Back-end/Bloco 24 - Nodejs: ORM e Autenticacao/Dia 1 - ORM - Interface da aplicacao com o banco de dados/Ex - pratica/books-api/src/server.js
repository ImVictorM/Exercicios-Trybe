const express = require('express');
const { BookRouter } = require('./routes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use('/books', BookRouter);

app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}!`));