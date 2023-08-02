import React from "react";
import { render, screen } from "@testing-library/react";
import { createMemoryHistory } from "history";
import { RouterProvider } from "react-router-dom";
import Home from "../../pages/Home";
import router from "../../routes/Routes";
import { BooksContextProvider } from "../../context/BooksContext"; // Importa el BooksContextProvider en lugar de BooksContext
import dataBooks from "../../../books.json";

describe("Home Page", () => {
  test("should display the correct number of books in the h1 and h3 tag", () => {
    const history = createMemoryHistory();

    // Mock del contexto BooksContext
    const contextValues = {
      booksFiltered: dataBooks.library,
      setBooksFiltered: jest.fn(),
      selectValue: "",
      favorites: [],
      readingViewOpen: false,
      setReadingViewOpen: jest.fn(),
    };


    render(
      <BooksContextProvider value={contextValues}>
        <RouterProvider router={router} history={history}>
          <Home />
        </RouterProvider>
      </BooksContextProvider>
    );

    const h1Element = screen.getByRole("heading", { level: 1 }).textContent;
    const booksQuantity = parseInt(h1Element);
    expect(contextValues.booksFiltered.length).toBe(booksQuantity);

    // Verificar que la etiqueta <h3> no se renderice cuando favorites.length < 1
    const h3Element = screen.queryByRole("heading", { level: 3 });
    expect(h3Element).toBeNull();
  });

});
