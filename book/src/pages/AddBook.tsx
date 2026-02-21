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
  const [category, setCategory] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!title.trim()) newErrors.title = "Title is required";
    if (!author.trim()) newErrors.author = "Author is required";

    if (!price) {
      newErrors.price = "Price is required";
    } else if (Number(price) <= 0) {
      newErrors.price = "Price must be greater than 0";
    }

    if (!isbn.trim()) {
      newErrors.isbn = "ISBN is required";
    } else if (isbn.length < 10) {
      newErrors.isbn = "ISBN must be at least 10 characters";
    }

    if (!category) newErrors.category = "Category is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    const newBook: Book = {
      id: Date.now().toString(),
      title,
      author,
      price: Number(price),
      isbn,
      category,
      coverImage: "https://placehold.co/600x400/000000/FFF",
      rating: 3,
    };

    addBook(newBook);
    navigate("/");
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-xl shadow-md mt-2">
      <h1 className="text-2xl font-bold mb-4">Add Book</h1>

      <form onSubmit={handleSubmit} className="space-y-4">

        {/* Title */}
        <div>
          <input
            className={`w-full border p-2 rounded ${
              errors.title ? "border-red-500" : ""
            }`}
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          {errors.title && (
            <p className="text-red-500 text-sm">{errors.title}</p>
          )}
        </div>

        {/* Author */}
        <div>
          <input
            className={`w-full border p-2 rounded ${
              errors.author ? "border-red-500" : ""
            }`}
            placeholder="Author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
          {errors.author && (
            <p className="text-red-500 text-sm">{errors.author}</p>
          )}
        </div>

        {/* Price */}
        <div>
          <input
            type="number"
            className={`w-full border p-2 rounded ${
              errors.price ? "border-red-500" : ""
            }`}
            placeholder="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          {errors.price && (
            <p className="text-red-500 text-sm">{errors.price}</p>
          )}
        </div>

        {/* ISBN */}
        <div>
          <input
            className={`w-full border p-2 rounded ${
              errors.isbn ? "border-red-500" : ""
            }`}
            placeholder="ISBN"
            value={isbn}
            onChange={(e) => setIsbn(e.target.value)}
          />
          {errors.isbn && (
            <p className="text-red-500 text-sm">{errors.isbn}</p>
          )}
        </div>

        {/* Category */}
        <div>
          <select
            className={`w-full border p-2 rounded ${
              errors.category ? "border-red-500" : ""
            }`}
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">Select Category</option>
            <option value="Fiction">Fiction</option>
            <option value="Non-Fiction">Non-Fiction</option>
            <option value="Science">Science</option>
            <option value="Technology">Technology</option>
            <option value="Business">Business</option>
            <option value="General">General</option>
          </select>
          {errors.category && (
            <p className="text-red-500 text-sm">{errors.category}</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-2 rounded 
                     hover:bg-blue-700 transition duration-300"
        >
          Add Book
        </button>
      </form>
    </div>
  );
}