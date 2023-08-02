import React from 'react'
import Book from "../Book/Book";
import "./booksAvailable.scss";

const BooksAvailable = ({ booksFiltered, setBooksFiltered, selectValue }) => {
  return (
    <section className="booksAvailable">
      <div className="info">
        {selectValue !== "all" && selectValue !== "" && (
          <span>Género: {selectValue}</span>
        )}
        {booksFiltered.length > 0 ? (
          <>
            <span>Disponibles: {booksFiltered.length} libros</span>
            <div className="gridAvailableContainer" data-testid="grid-container">
              {booksFiltered.map(({ book }) => (
                <Book key={Math.random(book.ISBN + Date.now())} book={book} setBooksFiltered={setBooksFiltered}/>
              ))}
            </div>
          </>
        ) : (
          <span>
            No se encontraron libros con los filtros de búsqueda seleccionados
          </span>
        )}
      </div>
    </section>
  );
};

export default BooksAvailable;
