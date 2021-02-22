const db = require("../models/books");

/* Classe Book composta pelos métodos que a pertence */

class Book {
    async createBook(req, res) {
        const results = await db.createBook(req.body);
        res.status(201).json({
            id: results[0]
        });
    };

    async getAllBooks(req, res) {
        const books = await db.getAllBooks();
        res.status(200).json({
            books
        });
    };

    async updateBook(req, res) {
        const id = await db.updateBook(req.params.id, req.body);
        res.status(200).json({
            id
        });
    };

    async deleteBook(req, res) {
        await db.deleteBook(req.params.id);
        res.status(200).json({
            success: true
        })
    };

}

module.exports = new Book;