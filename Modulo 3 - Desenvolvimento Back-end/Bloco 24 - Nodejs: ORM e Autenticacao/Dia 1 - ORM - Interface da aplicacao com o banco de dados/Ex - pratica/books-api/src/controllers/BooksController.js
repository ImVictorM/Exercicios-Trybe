const { BooksService } = require('../services');

async function getAll(_req, res) {
  const allBooks = await BooksService.getAll();
  return res.status(200).json(allBooks);
}

module.exports = {
  getAll,
}