import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { describe, it, expect } from "vitest";
import RecommendationSection from "../../Recommendations";
import { type Book } from "../../../types/book";

const mockBooks: Book[] = [
  { id: "1", title: "Book One", author: "Author One", price: 19.99, isbn: "978-1", coverImage: "https://example.com/book1.jpg", category: "Fiction", rating: 4.5 },
  { id: "2", title: "Book Two", author: "Author Two", price: 24.99, isbn: "978-2", coverImage: "https://example.com/book2.jpg", category: "Fiction", rating: 4.2 },
  { id: "3", title: "Book Three", author: "Author Three", price: 29.99, isbn: "978-3", coverImage: "https://example.com/book3.jpg", category: "Non-Fiction", rating: 4.8 },
  { id: "4", title: "Book Four", author: "Author Four", price: 34.99, isbn: "978-4", coverImage: "https://example.com/book4.jpg", category: "Non-Fiction", rating: 4.1 },
];

describe("RecommendationSection", () => {
  it("renders nothing when books array is empty", () => {
    const { container } = render(
      <BrowserRouter>
        <RecommendationSection title="Test" books={[]} />
      </BrowserRouter>
    );
    expect(container.firstChild).toBeNull();
  });

  it("renders title", () => {
    render(
      <BrowserRouter>
        <RecommendationSection title="Top Picks" books={mockBooks} />
      </BrowserRouter>
    );
    expect(screen.getByText("Top Picks")).toBeInTheDocument();
  });

  it("renders only first 3 books", () => {
    render(
      <BrowserRouter>
        <RecommendationSection title="Recommendations" books={mockBooks} />
      </BrowserRouter>
    );
    expect(screen.getByText("Book One")).toBeInTheDocument();
    expect(screen.getByText("Book Three")).toBeInTheDocument();
    expect(screen.queryByText("Book Four")).not.toBeInTheDocument();
  });
});