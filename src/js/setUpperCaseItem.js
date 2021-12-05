const setUpperCase = (bookItem) => {
    const item = bookItem.trim().split(' ');

    return item.map(word => {
        if(word.length < 2) return word;
        else return word[0].toUpperCase() + word.slice(1);
    }).join(' ');
}

const upperCaseBooks = (libraryBooks) => {
    const books = [];

    libraryBooks.forEach(book => {
        const upperTitle = setUpperCase(book.title);
        const upperAuthor = setUpperCase(book.author);

        books.push({
            title: upperTitle,
            author: upperAuthor,
            priority: book.priority,
            category: book.category
        })
    })
    return books;
}

export default upperCaseBooks;