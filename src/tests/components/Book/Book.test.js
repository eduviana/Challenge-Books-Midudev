import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Book from "../../../components/Book/Book";

// Utilizamos un mock para el contexto useBooksContext
jest.mock("../../../hooks/useBooksContext", () => {
  return jest.fn(() => ({
    favorites: [],
    setFavorites: jest.fn(),
    removeBookFromList: jest.fn(),
    addBookToAvailable: jest.fn(),
  }));
});

describe("Book component", () => {
  const book = {
    title: "El Señor de los Anillos",
    pages: 1200,
    genre: "Fantasía",
    cover:
      "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1566425108i/33.jpg",
    synopsis:
      "Una aventura épica en un mundo de fantasía llamado la Tierra Media.",
    year: 1954,
    ISBN: "978-0618640157",
    author: {
      name: "J.R.R. Tolkien",
      otherBooks: ["El Hobbit", "El Silmarillion"],
    },
  };
    test("should render book information correctly", () => {
      render(
        <MemoryRouter>
          <Book book={book} />
        </MemoryRouter>
      );

      // Verificar que la imagen del libro tenga el atributo alt correcto
      expect(screen.getByAltText(book.title)).toBeInTheDocument();

      // Verificar que el botón "Ver más" tenga el enlace correcto
      const viewMoreButton = screen.getByText("Ver más");
      expect(viewMoreButton).toBeInTheDocument();
      expect(viewMoreButton.closest("a")).toHaveAttribute(
        "href",
        `/book/${book.title}`
      );

      // Verificar que el botón de "Añadir Libro +" esté presente y tenga la clase correcta
      const addButton = screen.getByText("Añadir Libro +");
      expect(addButton).toBeInTheDocument();
      expect(addButton).toHaveClass("addBook");
      expect(addButton).not.toHaveClass("removeBook"); // Asegura que inicialmente no tenga la clase "removeBook"
    });
});
