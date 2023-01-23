const express = require('express');
const { BooksController } = require('../controllers')

const router = express.Router();

router.get('/', BooksController.getAll);
router.get('/:id', BooksController.getById);
router.put('/:id', BooksController.update);
router.post('/', BooksController.create);
router.delete('/:id', BooksController.remove);

module.exports = router;
