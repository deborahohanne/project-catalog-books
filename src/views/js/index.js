async function getAllBooks() {
    const response = await fetch('http://localhost:3000/books', {
        method: 'GET',
    });

    const data = response.json();

    return data;
};

function addBookListener() {
    const books = document.querySelectorAll('.bigbottom-link')
    books.forEach((book) => {
        book.addEventListener("click", () => openCloseModal(book.dataset));
    })
};

const modal = document.querySelector('.modal')
const modalContent = document.querySelector('.modal_content')

function openCloseModal(book = '') {
    if (!book) {
        return modal.style.display = 'none'
    }

    const modalContentHTML = 
        `<h2>Detalhes do Livro</h2>
        <h3>Título: ${book.bookTitle}</h3>
        <h3>Sub Título: ${book.bookSubtitle}</h3>
        <h3>Resumo: ${book.bookAbstract}</h3>
        <h3>Preço: R$ ${book.bookPrice}</h3>`

    modalContent.innerHTML = modalContentHTML
    modal.style.display = "flex";

}

function divCreateBooks(books) {
    const mainDiv = document.getElementById("main");

    const booksHTML = books.map((book) => {
        const bookDataAtributte = Object.entries(book).map(([key, value]) => `data-book-${key}="${value}"`).join(" ")
        return (
            `<section class="bigbottom">
            <h2>${book.title}</h2>
            <h3>${book.subTitle}</h3>
            <p>${book.abstract}</p>
            <a ${bookDataAtributte} class="bigbottom-link info-link" href="#">Leia mais...</a>
        </section>`
        )
    }).join("");

    mainDiv.innerHTML = booksHTML;
    addBookListener();
}

async function app() {
    const {
        books
    } = await getAllBooks();
    divCreateBooks(books);
};

app();