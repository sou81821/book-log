const form = document.getElementById('bookForm');
const bookList = document.getElementById('bookList');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const date = document.getElementById('date').value;
  const genre = document.getElementById('genre').value;
  const notes = document.getElementById('notes').value;

  const book = { title, author, date, genre, notes };
  addBookToList(book);
  saveBook(book);
  form.reset();
});

function addBookToList(book) {
  const li = document.createElement('li');
  li.textContent = `📖 ${book.title} (${book.genre}) by ${book.author}（${book.date}）\n感想: ${book.notes}`;
  bookList.appendChild(li);
}

function saveBook(book) {
  const books = JSON.parse(localStorage.getItem('books')) || [];
  books.push(book);
  localStorage.setItem('books', JSON.stringify(books));
}

window.onload = function () {
  const books = JSON.parse(localStorage.getItem('books')) || [];
  books.forEach(addBookToList);
};
