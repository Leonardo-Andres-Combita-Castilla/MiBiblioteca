const express = require ('express');
const router = express.Router();
const bookController = require ('../controllers/bookController');

router.get ('/books', bookController.getAllBooks);

router.get ('/books/:id', bookController.getOneBook); 

router.post ('/books', bookController.createBooks);

router.put ('/books/:id', bookController.updateBooks);

router.delete ('/books/:id', bookController.deleteBook);

module.exports = router