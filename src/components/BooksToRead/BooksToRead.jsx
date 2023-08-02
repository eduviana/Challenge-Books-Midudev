import React from "react";
import useBooksContext from "../../hooks/useBooksContext";
import Book from "../Book/Book";
import "./booksToRead.scss";

const BooksToRead = () => {
  const { favorites } = useBooksContext();

  return (
    <section className="booksToRead">
      <h3 className="title">Lista de lectura</h3>
      <div className="gridToReadContainer">
        {favorites.length > 0 ? (
          favorites.map((book) => (
            <Book key={book.title || ""} book={book}/>
          ))
        ) : (
          <p>No hay libros agregados.</p>
        )}
      </div>
    </section>
  );
};
export default BooksToRead;

