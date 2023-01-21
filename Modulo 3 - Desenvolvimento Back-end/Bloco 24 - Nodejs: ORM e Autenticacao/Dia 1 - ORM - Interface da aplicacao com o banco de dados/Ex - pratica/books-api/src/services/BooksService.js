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

async function update(id, { title, author, pageQuantity }) {
  const notFoundError = await getById(id);
  if (notFoundError.type) {
    return notFoundError;
  }
  await Book.update({
    title,
    author,
    pageQuantity,
  }, {
    where: { 
      id: Number(id),
    }
  });

  return {
    type: null,
    message: 'Book updated!'
  };
}

async function create(newBook) {
  const createResponse = await Book.create(newBook);
  return createResponse;
}

module.exports = {
  getAll,
  getById,
  update,
  create,
};
