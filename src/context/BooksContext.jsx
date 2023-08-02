import React, { createContext, useEffect, useState } from "react";
import dataBooks from "../../books.json";
import { getPages } from "../utils/getPages";
import { getUniqueGenres } from "../utils/getGenres";

const BooksContext = createContext();

const BooksContextProvider = ({ children }) => {
  const [books] = useState(dataBooks.library);
  const [inputPage, setInputPage] = useState(0);
  const [selectValue, setSelectValue] = useState("");
  // const { minValue, maxValue } = getPages(books);
  const [favorites, setFavorites] = useState(
    JSON.parse(localStorage.getItem("favorites")) || []
  );
  const [readingViewOpen, setReadingViewOpen] = useState(false);
  const uniqueGenres = getUniqueGenres(books);

  const [booksFiltered, setBooksFiltered] = useState(
    JSON.parse(localStorage.getItem("booksFiltered")) || []
  );

  useEffect(() => {
    applyFilters();
  }, [inputPage, selectValue, books]);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const applyFilters = () => {
    let filteredBooks = [...books];

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
      return;
    }

    // Exclude books that are in favorites from the filteredBooks
    const filteredBooksExcludingFavorites = filteredBooks.filter(
      ({ book }) => !favorites.some((favBook) => favBook.title === book.title)
    );

    setBooksFiltered(filteredBooksExcludingFavorites);
  };

  const removeBookFromList = (book) => {
    const updatedList = booksFiltered.filter(
      (item) => item.book.title != book.title
    );
    setBooksFiltered(updatedList);
  };

  const addBookToAvailable = (book) => {
    setBooksFiltered((prevBooks) => [...prevBooks, { book }]);
  };

  return (
    <BooksContext.Provider
      value={{
        books,
        inputPage,
        setInputPage,
        selectValue,
        setSelectValue,
        favorites,
        setFavorites,
        readingViewOpen,
        setReadingViewOpen,
        uniqueGenres,
        booksFiltered,
        setBooksFiltered,
        removeBookFromList,
        addBookToAvailable,
        // minValue,
        // maxValue,
      }}
    >
      {children}
    </BooksContext.Provider>
  );
};

export { BooksContext, BooksContextProvider };
