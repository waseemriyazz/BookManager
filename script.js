// Define the global array to store library books
const myLibrary = [];

// Get references to HTML elements
const modal = document.getElementById("myModal");
const btn = document.getElementById("myBtn");
const table = document.querySelector("table");
const author = document.querySelector("#author");
const bookName = document.querySelector("#bookName");
const pages = document.querySelector("#pages");

// Define the Book constructor function
function Book(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.status = 'read';
}

// Function to update the table with library data
function updateTable() {
  table.innerHTML = `
    <th>Serial</th>
    <th>Book</th>
    <th>Author</th>
    <th>Pages</th>
    <th>Status</th>
  `;

  myLibrary.forEach((element, index) => {
    table.innerHTML += `
      <tr>
        <td>${index + 1}</td>
        <td>${element.title}</td>
        <td>${element.author}</td>
        <td>${element.pages}</td>
        <td><button class="toggle">read</button></td>
      </tr>
    `;
  });

  // Add event listeners to the toggle buttons
  const toggleButtons = document.querySelectorAll(".toggle");
  toggleButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
      if (toggleButtons[index].textContent === 'read') {
        toggleButtons[index].textContent = 'not read';
      } else {
        toggleButtons[index].textContent = 'read';
      }
    });
  });
}

// Function to add a book to the library
function addBookToLibrary() {
  const newBook = new Book(bookName.value, author.value, pages.value);
  myLibrary.push(newBook);
  updateTable();
}

// Function to remove a book from the library
function removeBookFromLibrary(index) {
  myLibrary.splice(index - 1, 1);
  updateTable();
}

// Event listener for opening the modal
btn.onclick = function() {
  modal.style.display = "block";
};

// Event listener for closing the modal
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

// Event listener for the "Add book" form submission
const form = document.querySelector('form');
form.addEventListener('submit', function (e) {
  e.preventDefault();
  addBookToLibrary();
  modal.style.display = 'none';
  form.reset();
});

// Event listener for the "Remove book" form submission
const removeForm = document.querySelector("#remove");
removeForm.addEventListener('submit', function(e) {
  e.preventDefault();
  const index = document.querySelector("#index").value;
  removeBookFromLibrary(index);
  removeForm.reset();
});


