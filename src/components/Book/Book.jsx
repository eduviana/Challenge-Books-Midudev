import { Link } from "react-router-dom";
import useBooksContext from "../../hooks/useBooksContext";
import "./book.scss";

const Book = ({ book }) => {
  const { favorites, setFavorites, removeBookFromList, addBookToAvailable } =
    useBooksContext();

  const isBookInFavorites = favorites.some(
    (favBook) => favBook.title === book.title
  );

  const handleFavorites = () => {
    if (isBookInFavorites) {
      setFavorites((prevFavorites) =>
        prevFavorites.filter((favBook) => favBook.title !== book.title)
      );
      addBookToAvailable(book);
    } else {
      setFavorites((prevFavorites) => [...prevFavorites, book]);
      removeBookFromList(book); // Remueve el libro de setBooksFiltered si está en favoritos
    }
  };

  return (
    <div className="cardContainer">
      <img src={book.cover} alt={book.title} />
      <div className="cardOptions">
        <button className="viewMore">
          <Link to={`/book/${book.title}`}>Ver más</Link>
        </button>
        <button
          className={`addBook ${isBookInFavorites ? "removeBook" : ""}`}
          onClick={handleFavorites}
        >
          {isBookInFavorites ? "Quitar de la lista" : "Añadir Libro +"}
        </button>
      </div>
    </div>
  );
};

export default Book;
