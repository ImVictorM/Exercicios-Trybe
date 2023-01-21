const { BooksService } = require('../services');

async function getAll(_req, res) {
  const allBooks = await BooksService.getAll();
  return res.status(200).json(allBooks);
}

async function getById(req, res) {
  const { params: { id } } = req;
  const { type, message } = await BooksService.getById(id);
  if (type) {
    return res.status(404).json({ message });
  }
  return res.status(200).json(message);
}

module.exports = {
  getAll,
  getById,
};
