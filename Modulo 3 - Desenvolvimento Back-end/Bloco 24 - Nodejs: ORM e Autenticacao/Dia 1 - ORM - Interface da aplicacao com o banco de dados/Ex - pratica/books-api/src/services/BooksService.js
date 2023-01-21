const { Book } = require('../models');

async function getAll() {
  const allBooks = await Book.findAll();
  return allBooks;
}

async function getById(id) {
  const book = await Book.findByPk(id);
  if(!book) {
    return {
      type: 'NOT_FOUND',
      message: "Book not found"
    };
  };
  return {
    type: null,
    message: book,
  };
}

module.exports = {
  getAll,
  getById,
}
