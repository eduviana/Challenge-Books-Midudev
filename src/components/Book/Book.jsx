// import useBooksContext from "../../hooks/useBooksContext";
// import "./book.scss";

// const Book = ({ book, setBooksFiltered }) => {
//   const { favorites, setFavorites } = useBooksContext();

//   const isBookInFavorites = favorites.some(
//     (favBook) => favBook.title === book.title
//   );

//   const handleFavorites = () => {
//     if (isBookInFavorites) {
//       setFavorites((prevFavorites) =>
//         prevFavorites.filter((favBook) => favBook.title !== book.title)
//       );
//     } else {
//       setFavorites((prevFavorites) => [...prevFavorites, book]);
//     }
//   };

//   return (
//     <div className="cardContainer">
//       <img src={book.cover} alt={book.title} />
//       <button
//         className={`cardButton ${isBookInFavorites ? "removeBook" : ""}`}
//         onClick={() => handleFavorites()}
//       >
//         {isBookInFavorites ? "Quitar de la lista" : "Añadir Libro +"}
//       </button>
//     </div>
//   );
// };

// export default Book;

import useBooksContext from "../../hooks/useBooksContext";
import "./book.scss";

const Book = ({ book }) => {
  const { favorites, setFavorites, removeBookFromList, addBookToAvailable } = useBooksContext();

  const isBookInFavorites = favorites.some(
    (favBook) => favBook.title === book.title
  );

  const handleFavorites = () => {
    if (isBookInFavorites) {
      setFavorites((prevFavorites) =>
        prevFavorites.filter((favBook) => favBook.title !== book.title)
      );
      addBookToAvailable(book)
      
    } else {
      setFavorites((prevFavorites) => [...prevFavorites, book]);
      removeBookFromList(book); // Remueve el libro de setBooksFiltered si está en favoritos
    }
  };

  return (
    <div className="cardContainer">
      <img src={book.cover} alt={book.title} />
      <button
        className={`cardButton ${isBookInFavorites ? "removeBook" : ""}`}
        onClick={handleFavorites}
      >
        {isBookInFavorites ? "Quitar de la lista" : "Añadir Libro +"}
      </button>
    </div>
  );
};

export default Book;
