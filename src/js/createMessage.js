const createMessage = (message, containerBooks) => {
    const paragraph = document.createElement('p');
    paragraph.classList.add('books__empty');
    paragraph.innerHTML = message;
    containerBooks.appendChild(paragraph);
}

export default createMessage;