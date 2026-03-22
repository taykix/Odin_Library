const myLibrary = [];

function Book(title, author, pages, read) {
  // the constructor...
  if (!new.target) {
    throw Error("You must use the 'new' operator to all the constructor");
  }
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.id = crypto.randomUUID;
}

function addBookToLibrary(title, author, pages, read) {
  // take params, create a book then store it in the array
  let newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
}

function getNewBookInputValues(bookForm) {
  const formData = new FormData(bookForm);

  const title = formData.get('btitle');
  const author = formData.get('bauthor');
  const pages = formData.get('bpages');
  const isRead = formData.get('isRead');
  
  addBookToLibrary(title, author, pages, isRead);
}

function createBookCard() {
}

const newBookBtn = document.querySelector(".add-book");
const favDialog = document.getElementById("favDialog");
const bookForm = document.getElementById("book-form");

bookForm.addEventListener("submit", function(e){
  e.preventDefault();
  getNewBookInputValues();
  console.log(title + author + pages + isRead);
});

newBookBtn.addEventListener("click", () => {
  favDialog.showModal();
  console.log("Button clicklendi anansi");
});


