const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function animateHeader() {
    const header = document.querySelector('h1');
    header.style.animation = 'none'; // Reset the animation
    void header.offsetWidth; // Trigger reflow
    header.style.animation = 'pulse 1s infinite'; // Restart the animation
}

function toggleModal() {
    const modal = document.getElementById("modal");
    modal.style.display = (modal.style.display === "none" || modal.style.display === "") ? "block" : "none";
}

function addBookToLibrary() {
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const pages = document.getElementById("pages").value;
    const read = document.getElementById("read").checked;

    if (title && author && pages) {
        const newBook = new Book(title, author, pages, read);
        myLibrary.push(newBook);

        displayBooks();

        // Clear input fields after adding a book
        document.getElementById("title").value = '';
        document.getElementById("author").value = '';
        document.getElementById("pages").value = '';
        document.getElementById("read").checked = false;

        toggleModal();
    } else {
        alert("Please fill in all fields.");
    }
}

function displayBooks() {
    const bookListElement = document.getElementById("book-list");
    bookListElement.innerHTML = '';

    myLibrary.forEach(book => {
        const bookCard = document.createElement("div");
        bookCard.classList.add("book-card");

        const bookInfo = document.createElement("p");
        bookInfo.classList.add("book-info");

        let readStatus = book.read ? '<span class="book-read">Read</span>' : 'Not Read';
        bookInfo.innerHTML = `<strong>Title:</strong> ${book.title}<br><strong>Author:</strong> ${book.author}<br><strong>Pages:</strong> ${book.pages}<br><strong>Status:</strong> ${readStatus}`;

        bookCard.appendChild(bookInfo);
        bookListElement.appendChild(bookCard);
    });
}
