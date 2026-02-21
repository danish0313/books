import { Link } from "react-router-dom";
import { type Book } from "../types/book";

interface Props {
  book: Book;
}

export default function BookCard({ book }: Props) {
  return (
    <Link to={`/book/${book.id}`}>
      <div className="bg-white shadow-md rounded-xl p-4 hover:shadow-lg transition">
        <img
          src={book.coverImage}
          alt={book.title}
          className="h-48 w-full object-cover rounded-md"
        />
        <h2 className="mt-2 font-semibold text-lg">{book.title}</h2>
        <p className="text-sm text-gray-600">{book.author}</p>
        <p className="text-sm mt-1">€ {book.price}</p>
        <p className="text-xs text-gray-400">ISBN: {book.isbn}</p>
      </div>
    </Link>
  );
}

