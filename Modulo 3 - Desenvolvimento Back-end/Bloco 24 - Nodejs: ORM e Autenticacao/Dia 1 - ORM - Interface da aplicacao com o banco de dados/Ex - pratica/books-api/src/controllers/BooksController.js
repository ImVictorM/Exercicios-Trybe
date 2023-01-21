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

async function update(req, res) {
  const {
    params: { id },
    body
  } = req;

  const { type, message } = await BooksService.update(id, body);
  if (type) {
    return res.status(404).json({ message });
  }
  return res.status(200).json(message);
}

async function create(req, res) {
  const { body } = req;
  const createResponse = await BooksService.create(body);
  return res.status(201).json(createResponse);
}

async function remove(req, res) {
  const { params: { id } } = req;
  const { type, message } = await BooksService.remove(id);
  if (type) {
    return res.status(500).json({ message });
  }
  return res.status(200).json(message);
}

module.exports = {
  getAll,
  getById,
  update,
  create,
  remove,
};
