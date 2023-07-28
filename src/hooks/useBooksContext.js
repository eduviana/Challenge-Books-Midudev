import { useContext } from "react";
import { BooksContext } from "../context/BooksContext";


const useBooksContext = () => {
  const booksContext = useContext(BooksContext);

  return booksContext;
};

export default useBooksContext;