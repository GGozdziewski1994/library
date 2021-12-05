import upperCaseBooks from "./setUpperCaseItem.js";
import renderBooks from "./renderBooks.js";
import clearValue from "./clearForms.js";
import createMessage from "./createMessage.js";

const btnSearch = document.querySelector('.search__btn--books');
const btnAddBook  = document.querySelector('.search__btn-add-book');
const containerBooks = document.querySelector('.books__container');

const inputTitle = document.querySelector('.search__title');
const inputAuthor = document.querySelector('.search__author');
const selectPriority = document.querySelector('.search__priority');
const selectCategory = document.querySelector('.search__category');

const getBooksLocalStorage = () => {
    const storageJsonBooks = localStorage.getItem('LibraryBooks');
    return JSON.parse(storageJsonBooks);
}

const setLibraryBooks = (library, book) => {
    library.push(book);
    localStorage.setItem('LibraryBooks', JSON.stringify(library));

    renderBooks(library, containerBooks);
}

btnSearch.addEventListener('click', function(e) {
    e.preventDefault();

    containerBooks.textContent = '';

    const userTitle = inputTitle.value.trim();
    const userAuthor = inputAuthor.value.trim();

    const storageLibraryBooks = getBooksLocalStorage();

    if(!storageLibraryBooks) return createMessage('Your Library is empty !!!', containerBooks);

    const lowerCaseLibrary = storageLibraryBooks.map(book => {
        return {
            title: book.title.toLowerCase(),
            author: book.author.toLowerCase(),
            priority: book.priority,
            category: book.category
        }
    });

    const booksFilter = lowerCaseLibrary.filter(book =>
        book.title.includes(userTitle.toLowerCase()) &&
        book.author.includes(userAuthor.toLowerCase()));

    clearValue(inputTitle, inputAuthor);

    if(booksFilter.length === 0) return createMessage('No found book !', containerBooks);

    const booksUpperCase = upperCaseBooks(booksFilter);

    renderBooks(booksUpperCase, containerBooks);
});

btnAddBook.addEventListener('click', function (e) {
    e.preventDefault();
    const library = [];

    if(
        inputTitle.value.length < 1 ||
        inputAuthor.value.length < 3 ||
        selectPriority.value === '' ||
        selectCategory.value === ''
    ) return;

    containerBooks.textContent = '';

    const book = {
        title: inputTitle.value,
        author: inputAuthor.value,
        priority: selectPriority.value,
        category: selectCategory.value,
    };

    const storageLibraryBooks = getBooksLocalStorage();

    if(storageLibraryBooks === null) setLibraryBooks(library, book);
    else setLibraryBooks(storageLibraryBooks, book);

    clearValue(inputTitle, inputAuthor);
});

const init = () => {
    const books = localStorage.getItem('LibraryBooks');
    if(books === null) createMessage('Your Library is empty !!!', containerBooks);
    else renderBooks(JSON.parse(books), containerBooks);
}
init();





