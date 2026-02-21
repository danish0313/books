import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { describe, it, expect } from "vitest";
import "@testing-library/jest-dom";
import BookCard from "../../BookCard";
import { type Book } from "../../../types/book";

const mockBook: Book = {
  id: "1",
  title: "Test Book",
  author: "Test Author",
  price: 29.99,
  isbn: "978-3-16-148410-0",
  coverImage: "https://example.com/cover.jpg",
  category: "Fiction",
  rating: 4.5,
};

describe("BookCard", () => {
  it("renders book title", () => {
    render(
      <BrowserRouter>
        <BookCard book={mockBook} />
      </BrowserRouter>
    );
    expect(screen.getByText("Test Book")).toBeInTheDocument();
  });

  it("renders book author and price", () => {
    render(
      <BrowserRouter>
        <BookCard book={mockBook} />
      </BrowserRouter>
    );
    expect(screen.getByText("Test Author")).toBeInTheDocument();
    expect(screen.getByText("€ 29.99")).toBeInTheDocument();
  });

  it("links to correct book details page", () => {
    render(
      <BrowserRouter>
        <BookCard book={mockBook} />
      </BrowserRouter>
    );
    const link = screen.getByRole("link");
    expect(link).toHaveAttribute("href", "/book/1");
  });
});