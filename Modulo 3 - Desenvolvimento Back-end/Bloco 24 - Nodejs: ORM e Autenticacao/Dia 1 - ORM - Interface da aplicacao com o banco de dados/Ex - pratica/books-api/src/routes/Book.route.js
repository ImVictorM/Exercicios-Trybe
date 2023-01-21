const express = require('express');
const { BooksController } = require('../controllers')

const router = express.Router();

router.get('/', BooksController.getAll);

module.exports = router;