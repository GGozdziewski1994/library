const renderBooks = (books, containerBooks) => {
    const html = `
        <ul class="library">
            ${books.map(book => {
        return `
                <li class="library__book">
                    <div><span class="library__item">Title:</span> ${book.title}</div>
                    <div><span class="library__item">Author:</span> ${book.author}</div>
                    <div><span class="library__item">Priority:</span> ${book.priority}</div>
                    <div><span class="library__item">Category:</span> ${book.category}</div>
                </li>
               `;
    }).join('')}
        </ul>
    `;

    containerBooks.insertAdjacentHTML('afterbegin', html);
}

export default renderBooks;