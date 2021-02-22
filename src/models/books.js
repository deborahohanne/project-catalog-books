const knex = require("../database/knex");

/* Model composta pelas funções de CRUD no BD */

// Adiciona novo livro ao banco de dados, recebe os dados do livro como parâmetro
function createBook(book) {
    return knex("books").insert(book);
};

// Busca todos os livros existentes no bando de dados, e retorná-los
function getAllBooks() {
    return knex("books").select("*");
};

// Deleta um livro, recebendo como parâmetro o id do livro
function deleteBook(id) {
    return knex("books").where("id", id).del();
};

// Atualiza os dados de um livro, utilizando o id do livro como parâmetro de entrada
function updateBook(id, book) {
    return knex("books").where("id", id).update(book);
};

module.exports = {
    createBook,
    getAllBooks,
    deleteBook,
    updateBook
}