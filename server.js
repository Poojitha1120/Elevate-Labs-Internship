const express = require("express");

const app = express();
const PORT = 3000;

// Middleware to read JSON
app.use(express.json());

// In-memory book storage
let books = [
  { id: 1, title: "The Alchemist", author: "Paulo Coelho" },
  { id: 2, title: "Atomic Habits", author: "James Clear" }
];

// GET - View all books
app.get("/books", (req, res) => {
  res.json(books);
});

// GET - View single book by ID
app.get("/books/:id", (req, res) => {
  const book = books.find(b => b.id === parseInt(req.params.id));
  if (!book) {
    return res.status(404).json({ message: "Book not found" });
  }
  res.json(book);
});

// POST - Add new book
app.post("/books", (req, res) => {
  const newBook = {
    id: books.length + 1,
    title: req.body.title,
    author: req.body.author
  };
  books.push(newBook);
  res.status(201).json(newBook);
});

// PUT - Update book
app.put("/books/:id", (req, res) => {
  const book = books.find(b => b.id === parseInt(req.params.id));
  if (!book) {
    return res.status(404).json({ message: "Book not found" });
  }

  book.title = req.body.title || book.title;
  book.author = req.body.author || book.author;

  res.json(book);
});

// DELETE - Delete book
app.delete("/books/:id", (req, res) => {
  books = books.filter(b => b.id !== parseInt(req.params.id));
  res.json({ message: "Book deleted successfully" });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
