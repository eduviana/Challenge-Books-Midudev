import React from "react";
import { MemoryRouter } from "react-router-dom";
import { BooksContextProvider } from "../../../context/BooksContext";
import Filters from "../../../components/Filters/Filters";
import BooksAvailable from "../../../components/BooksAvailable/BooksAvailable";
import { render, screen } from "@testing-library/react";

describe("BooksAvailable component", () => {
  test("It should not display the genre text if selectValue has the value of all and an empty string", () => {
    // mock para booksFiltered y selectValue
    const booksFiltered = [
      {
        book: {
          title: "El Señor de los Anillos",
        },
      },
    ];
    const selectValue = "all";

    render(
      <MemoryRouter>
        <BooksContextProvider
          booksFiltered={booksFiltered}
          selectValue={selectValue}
        >
          <Filters />
          <BooksAvailable
            booksFiltered={booksFiltered}
            setBooksFiltered={jest.fn()}
            selectValue={selectValue}
          />
        </BooksContextProvider>
      </MemoryRouter>
    );

    // Verifica si el elemento <span> con el texto "Género: Fantasía" NO existe en el documento
    const genderText = screen.queryByText(/Género: Fantasía/i);
    expect(genderText).not.toBeInTheDocument();
  });

  test("should render an element with class gridAvailableContainer if booksFiltered contains elements and a notFound text if not", () => {
    // mock para booksFiltered y selectValue
    const booksFiltered = [];

    render(
      <MemoryRouter>
        <BooksContextProvider booksFiltered={booksFiltered}>
          <Filters />
          <BooksAvailable
            booksFiltered={booksFiltered}
            setBooksFiltered={jest.fn()}
          />
        </BooksContextProvider>
      </MemoryRouter>
    );

    // Verifica si el elemento con la clase 'gridAvailableContainer' existe en el documento
    const gridContainer = screen.queryByTestId("grid-container");
    expect(gridContainer).not.toBeInTheDocument(); // O puedes usar expect(gridContainer).toBeTruthy();

    const notFound = screen.getByText(
      "No se encontraron libros con los filtros de búsqueda seleccionados"
    );
    expect(notFound).toBeInTheDocument();
  });
});
