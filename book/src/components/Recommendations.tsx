import { type Book } from "../types/book";
import BookCard from "./BookCard";

interface Props {
  title: string;
  books: Book[];
}

export default function RecommendationSection({ title, books }: Props) {
  if (books.length === 0) return null;

  return (
    <div className="mt-8 w-full">
      <h3 className="text-xl font-semibold mb-4">{title}</h3>

      <div className="flex flex-wrap justify-start gap-4 items-stretch">
        {books.slice(0, 3).map((book) => (
          <div key={book.id} className="flex-1 min-w-[220px] max-w-[300px]">
            <BookCard book={book} />
          </div>
        ))}
      </div>
    </div>
  );
}