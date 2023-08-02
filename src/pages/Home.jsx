import React from 'react';
import useBooksContext from "../hooks/useBooksContext";
import Filters from "../components/Filters/Filters";
import BooksAvailable from "../components/BooksAvailable/BooksAvailable";
import BooksToRead from "../components/BooksToRead/BooksToRead";
import "../App.scss"



const Home = () => {
    const {
        booksFiltered,
        setBooksFiltered,
        selectValue,
        favorites,
        readingViewOpen,
        setReadingViewOpen,
      } = useBooksContext();

    
    
      return (
        <main className="main">
          <div className="textsContainer">
            <h1>{booksFiltered.length} libros disponibles</h1>
            {favorites.length > 0 && (
              <h3>{favorites.length} en la lista de lectura</h3>
            )}
          </div>
          <Filters />
          <button
            className="readingViewButton"
            onClick={() => setReadingViewOpen(!readingViewOpen)}
          >
            {readingViewOpen ? "Cerrar lista de lectura" : "Ver lista de lectura"}
          </button>
          {readingViewOpen ? (
            <BooksToRead favorites={favorites} />
          ) : (
            <BooksAvailable
              booksFiltered={booksFiltered}
              setBooksFiltered={setBooksFiltered}
              selectValue={selectValue}
            />
          )}
        </main>
      );
    }
export default Home