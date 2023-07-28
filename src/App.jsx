// import useBooksContext from "./hooks/useBooksContext";
// import Filters from "./components/Filters/Filters";
// import BooksAvailable from "./components/BooksAvailable/BooksAvailable";
// import "./App.scss";
// import BooksToRead from "./components/BooksToRead/BooksToRead";

// function App() {
//   const { booksFiltered, favorites, readingViewOpen, setReadingViewOpen } =
//     useBooksContext();

//   return (
//     <main className="main">
//       <div className="textsContainer">
//         <h1>{booksFiltered.length} libros disponibles</h1>
//         {favorites.length > 0 && (
//           <h3>{favorites.length} en la lista de lectura</h3>
//         )}
//       </div>
//       <Filters />
//       <button
//         className="readingViewButton"
//         onClick={() => setReadingViewOpen(!readingViewOpen)}
//       >
//         {readingViewOpen ? "Cerrar lista de lectura" : "Ver lista de lectura"}
//       </button>
//       {readingViewOpen ? <BooksToRead /> : <BooksAvailable />}
//     </main>
//   );
// }

// export default App;

import useBooksContext from "./hooks/useBooksContext";
import Filters from "./components/Filters/Filters";
import BooksAvailable from "./components/BooksAvailable/BooksAvailable";
import "./App.scss";
import BooksToRead from "./components/BooksToRead/BooksToRead";
import { useEffect, useState } from "react";

function App() {
  const {
    booksFiltered,
    setBooksFiltered,
    selectValue,
    favorites,
    setFavorites,
    readingViewOpen,
    setReadingViewOpen,
  } = useBooksContext();

  //  // Estado local para mantener el valor actualizado de booksFiltered.length
  //  const [filteredBooksLength, setFilteredBooksLength] = useState(booksFiltered.length);

  //  // useEffect para actualizar filteredBooksLength cuando cambia booksFiltered
  //  useEffect(() => {
  //    setFilteredBooksLength(booksFiltered.length);
  //  }, [booksFiltered]);

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

export default App;
