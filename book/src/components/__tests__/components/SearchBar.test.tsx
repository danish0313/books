import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect, vi } from "vitest";
import "@testing-library/jest-dom";
import SearchBar from "../../SearchBar";

describe("SearchBar", () => {
  it("renders input with placeholder", () => {
    render(<SearchBar value="" onChange={vi.fn()} />);
    expect(screen.getByPlaceholderText("Search by title or author...")).toBeInTheDocument();
  });

  it("displays value", () => {
    render(<SearchBar value="React" onChange={vi.fn()} />);
    expect(screen.getByDisplayValue("React")).toBeInTheDocument();
  });
});