const { Book } = require('../models');

async function getAll() {
  const allBooks = await Book.findAll();
  return allBooks;
}

module.exports = {
  getAll,
}