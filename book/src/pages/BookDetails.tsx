import { useParams } from "react-router-dom";
import { type Book } from "../types/book";
import RecommendationSection from "../components/Recommendations";

export default function BookDetails(props: { books: Book[] }) {
  const { id } = useParams();
  const book = props.books.find((b) => b.id === id);

  if (!book) return <p className="p-6">Book not found</p>;

  const byAuthor = props.books.filter(
    (b) => b.author === book.author && b.id !== book.id
  );

  const byCategory = props.books.filter(
    (b) => b.category === book.category && b.id !== book.id
  );

  return (
    <div className="container mx-auto p-6">
      <div className="flex flex-col md:flex-row gap-8">
        <img
          src={book.coverImage}
          alt={book.title}
          className="w-64 rounded-xl shadow-md"
        />

        <div>
          <h1 className="text-3xl font-bold">{book.title}</h1>
          <p className="text-lg text-gray-600">{book.author}</p>
          <p className="mt-2">€ {book.price}</p>
          <p className="text-sm text-gray-500">ISBN: {book.isbn}</p>
          <p className="mt-2">Category: {book.category}</p>
          <p className="mt-2 text-yellow-500">
            {"★".repeat(book.rating)}
          </p>
        </div>
      </div>

      <RecommendationSection title="More by this Author" books={byAuthor} />
      <RecommendationSection title="Similar Category" books={byCategory} />
    </div>
  );
}

