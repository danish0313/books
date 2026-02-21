
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { type Book } from "../types/book";

interface Props {
  addBook: (book: Book) => void;
}

export default function AddBook({ addBook }: Props) {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [price, setPrice] = useState("");
  const [isbn, setIsbn] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newBook: Book = {
      id: Date.now().toString(),
      title,
      author,
      price: Number(price),
      isbn,
      coverImage: "https://placehold.co/600x400/000000/FFF",
      category: "General",
      rating: 3,
    };

    if(newBook) {
        addBook(newBook);
    }
    navigate("/");
  };

  return (
    <div className="max-w-md mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Add Book</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          className="w-full border p-2 rounded"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <input
          className="w-full border p-2 rounded"
          placeholder="Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          required
        />

        <input
          type="number"
          className="w-full border p-2 rounded"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />

        <input
          className="w-full border p-2 rounded"
          placeholder="ISBN"
          value={isbn}
          onChange={(e) => setIsbn(e.target.value)}
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
        >
          Add Book
        </button>
      </form>
    </div>
  );
}