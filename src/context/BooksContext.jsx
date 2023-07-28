import React, { createContext, useEffect, useState } from "react";
import dataBooks from "../../books.json";
import { getPages } from "../utils/getPages";
import { getUniqueGenres } from "../utils/getGenres";

const BooksContext = createContext();

const BooksContextProvider = ({ children }) => {
  const [books] = useState(dataBooks.library);
  const [inputPage, setInputPage] = useState(0);
  const [selectValue, setSelectValue] = useState("");
  const { minValue, maxValue } = getPages(books);
  const [favorites, setFavorites] = useState([]);
  const [readingViewOpen, setReadingViewOpen] = useState(false);
  const uniqueGenres = getUniqueGenres(books);

  const [booksFiltered, setBooksFiltered] = useState([]);

  const applyFilters = () => {
    let filteredBooks = [...books]; // Crear una copia de los libros para no modificar el estado original

    if (inputPage !== 0) {
      filteredBooks = filteredBooks.filter(
        ({ book }) => book.pages >= inputPage
      );
    }

    if (selectValue !== "") {
      filteredBooks = filteredBooks.filter(
        ({ book }) => book.genre === selectValue
      );
    }

    if (selectValue === "all") {
      setBooksFiltered(books);
    }
    setBooksFiltered(filteredBooks);
  };

  useEffect(() => {
    applyFilters();
  }, [inputPage, selectValue, books]);

  const removeBookFromList = (book) => {
    const updatedList = booksFiltered.filter(
      (item) => item.book.title != book.title
    );
    setBooksFiltered(updatedList);
    console.log("conteext");
  };

  const addBookToAvailable = (book) => {
   
    setBooksFiltered((prevBooks) => [...prevBooks, {book}]);
  }

  return (
    <BooksContext.Provider
      value={{
        books,
        inputPage,
        setInputPage,
        selectValue,
        setSelectValue,
        minValue,
        maxValue,
        favorites,
        setFavorites,
        readingViewOpen,
        setReadingViewOpen,
        uniqueGenres,
        booksFiltered,
        setBooksFiltered,
        removeBookFromList,
        addBookToAvailable
      }}
    >
      {children}
    </BooksContext.Provider>
  );
};

export { BooksContext, BooksContextProvider };
