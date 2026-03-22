let myLibrary = [];

const newBookBtn = document.querySelector(".add-book");
const favDialog = document.getElementById("favDialog");
const bookForm = document.getElementById("book-form");
const removeBtn = document.getElementById("");
const bookCardContainer = document.querySelector(".book-card-container");

function Book(title, author, pages, read) {
  // the constructor...
  if (!new.target) {
    throw Error("You must use the 'new' operator to all the constructor");
  }
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.id = crypto.randomUUID();
}

function addBookToLibrary(title, author, pages, read) {
  // take params, create a book then store it in the array
  let newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
}

// gets the input values from Formdata Object and adds a book with values to libraray array
function getNewBookInputValues(bookForm) {
  const formData = new FormData(bookForm);

  const title = formData.get('btitle');
  const author = formData.get('bauthor');
  const pages = formData.get('bpages');
  const isRead = formData.get('isRead');
  console.log(isRead);
  addBookToLibrary(title, author, pages, isRead);
}

// renders the book array in UI.
// first it resets book container inner HTML
// and iterates over array and creates bookcard div for a book
function displayBooks() {
  bookCardContainer.innerHTML = "";

  myLibrary.forEach((element) => addBookHtml(element.title, element.author, element.pages, element.read, element.id));
}

// creates a book card html and appends it to book container.
function addBookHtml(title, author, pages, isRead, id) {
  const bookCard = document.createElement("div");
  bookCard.classList.add("book-card");
  bookCard.setAttribute("id", id);

  bookCard.innerHTML =  `     
    <div class="books-card-title" id="title">${title}</div>
    <div class="books-card-title" id="author">${author}</div>
    <div class="books-card-title" id="pages">${pages}</div>
    <div class="books-card-title" id="isRead">${isRead}</div>
    <img class="books-card-title remove-btn" src="./icons/delete.svg"></img> `;
  
  bookCardContainer.appendChild(bookCard);
}

addBookToLibrary("War and Peace", "Tolstoy", "1800", "yes");
displayBooks();

bookForm.addEventListener("submit", function(e){
  e.preventDefault();
  getNewBookInputValues(bookForm);
  displayBooks();
  favDialog.close();
});

newBookBtn.addEventListener("click", () => {
  favDialog.showModal();
  console.log("Button clicklendi anansi");
});

bookCardContainer.addEventListener("click", (e) => {
  if (e.target.classList.contains('remove-btn')) {
    console.log(e.target.closest(".book-card"));
    const bookId = e.target.closest(".book-card").id;
    
    myLibrary = myLibrary.filter(element => {
      return element.id != bookId;
    })
  }

  displayBooks();
})

