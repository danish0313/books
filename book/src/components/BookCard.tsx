import { Link } from "react-router-dom";
import { type Book } from "../types/book";

interface Props {
  book: Book;
}

export default function BookCard({ book }: Props) {
  return (
    <Link to={`/book/${book.id}`} className="block group">
      <div
        className="
          bg-white rounded-xl p-4
          shadow-md
          transform transition-all duration-300 ease-out
          hover:-translate-y-2 hover:scale-[1.03] hover:shadow-2xl
        "
      >
        <div className="overflow-hidden rounded-md">
          <img
            src={book.coverImage}
            alt={book.title}
            className="
              h-48 w-full object-cover
              transition-transform duration-300
              group-hover:scale-110
            "
          />
        </div>

        <h2 className="mt-3 font-semibold text-lg transition-colors duration-300 group-hover:text-blue-600">
          {book.title}
        </h2>

        <p className="text-sm text-gray-600">{book.author}</p>
        <p className="text-sm mt-1 font-medium">€ {book.price}</p>
        <p className="text-xs text-gray-400">ISBN: {book.isbn}</p>
      </div>
    </Link>
  );
}