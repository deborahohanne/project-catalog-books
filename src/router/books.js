const router = require('express').Router()

/* Rotas com os endpoints */ 

const Book = require('../controllers/Book')

router.get('/books', Book.getAllBooks)

router.post('/createBook', Book.createBook)

router.patch('/updateBook/:id', Book.updateBook)

router.delete('/deleteBook/:id', Book.deleteBook)

module.exports = router;