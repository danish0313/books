import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import BookDetails from "./pages/BookDetails";
import AddBook from "./pages/AddBook";
import { type Book } from "./types/book";
import { mockBooks } from "./data/books";

export default function App() {
  const [books, setBooks] = useState<Book[]>(mockBooks);

  // This function is passed to AddBook
  const addBook = (book: Book) => {
    if (book) {
       localStorage.setItem("books", JSON.stringify([...books, book]));
    }
    setBooks((prev) => [...prev, book]);
    
  };

  // if there are books in state, check localStorage for updates. This allows the app to persist new books across refreshes.
  let storedBooks;
  if (books.length > 0) {
    storedBooks = localStorage.getItem("books");
  }

  const booksArray = storedBooks ? JSON.parse(storedBooks) : mockBooks;
  return (
      <div className="bg-gray-100 min-h-screen min-w-screen">
        <Routes>
          <Route path="/" element={<Home books={booksArray} />} />
          <Route path="/book/:id" element={<BookDetails books={booksArray} />} />
          <Route path="/add" element={<AddBook addBook={addBook} />} />
        </Routes>
      </div>

  );
}