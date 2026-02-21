import { useState } from "react";
import BookCard from "../components/BookCard";
import SearchBar from "../components/SearchBar";
import { Link } from "react-router-dom";
import { type Book } from "../types/book";

export default function Home(props: { books: Book[] }) {
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);

  const filteredBooks = props.books.filter(
    (book) =>
      book.title.toLowerCase().includes(search.toLowerCase()) ||
      book.author.toLowerCase().includes(search.toLowerCase())
  );

  const handleSearchChange = (value: string) => {
    setSearch(value);
    setLoading(true);
    setTimeout(() => setLoading(false), 600); // Simulate loading delay
  };

  const displayedBooks = loading ? (
    <div className="flex justify-center items-center h-40 w-full">
      <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
    </div>
  ) : (
    filteredBooks.map((book) => (
      <BookCard key={book.id} book={book} />
    ))
  );

  return (
    <div className="container mx-auto p-6 flex flex-col items-center">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold tracking-tight text-gray-800">
          Book Manager
        </h1>
        <div className="w-24 h-1 mx-auto mt-2 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500"></div>
      </div>

      <SearchBar value={search} onChange={handleSearchChange} />

      <Link
        to="/add"
        className="
          inline-block
          bg-blue-300 text-black font-semibold
          px-4 py-2 rounded mb-6
          transition-all duration-300 ease-out
          hover:bg-blue-400
          hover:text-white
          hover:-translate-y-1
          hover:scale-105
          hover:shadow-lg
          active:scale-95    
        "
      >
        Add New Book
      </Link>

      {filteredBooks.length === 0 ? (
        <p className="text-gray-500">No books found...</p>
      ) : (
        <div className="flex flex-wrap justify-center gap-6">
          {displayedBooks}
        </div>
      )}
    </div>
  );
}