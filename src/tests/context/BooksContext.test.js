import React from "react";
import { render, screen } from "@testing-library/react";
import { BooksContextProvider } from "../../context/BooksContext";
import { RouterProvider } from "react-router-dom";
import router from "../../routes/Routes";

test("renders Home component", () => {
  render(
    <BooksContextProvider>
      <RouterProvider router={router} />
    </BooksContextProvider>
  );

   // Verificar que el texto "Welcome to the Home page!" esté presente en el componente
  //  const hola = screen.getByText("por");
  //  expect(hola).toBeInTheDocument();
});
