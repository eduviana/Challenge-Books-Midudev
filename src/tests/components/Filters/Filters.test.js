import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";

import Filters from "../../../components/Filters/Filters";
import { BooksContext, BooksContextProvider } from "../../../context/BooksContext";
import { MemoryRouter } from "react-router-dom";

describe("Filters Component", () => {
  // Mock del contexto BooksContext
  const contextValues = {
    inputPage: 0,
    setInputPage: jest.fn(), // Mock de la función setInputPage
    selectValue: "",
    setSelectValue: jest.fn(),
    uniqueGenres: [],
  };
  test("should call setInputPage with the selected value when the range input value changes", () => {
    render(
        //context mockeado
      <BooksContext.Provider value={contextValues}>
        <Filters />
      </BooksContext.Provider>
    );

    // Encuentra el elemento input de tipo range utilizando el atributo aria-label
    const rangeInput = screen.getByLabelText("page-range-input");

    // Simula un cambio en el valor del input
    fireEvent.change(rangeInput, { target: { value: "50" } });

    // Verifica que la función setInputPage del contexto BooksContext se haya llamado con el valor seleccionado (50)
    expect(contextValues.setInputPage).toHaveBeenCalledWith("50");
  });

  test("should call setSelectedValue with the selected value when the select input value change", () => {
    render(
        //context real
        <MemoryRouter>
        <BooksContextProvider>
          <Filters />
        </BooksContextProvider>
      </MemoryRouter>
    );
   // Encuentra el elemento select utilizando el atributo aria-label
   const selectInput = screen.getByLabelText("select-input");

   // Simula un cambio en el valor del select y selecciona una opción específica
   fireEvent.change(selectInput, { target: { value: "Fantasía" } });

   // Verifica que la función setSelectValue se haya llamado al menos una vez
   expect(screen.getByText("Fantasía")).toBeInTheDocument()
  });
});
