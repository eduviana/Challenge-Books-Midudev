import { useNavigate, useParams } from "react-router-dom";

import "./bookDetails.scss";
import dataBooks from "../../books.json";
import { useEffect, useState } from "react";

const BookDetails = () => {
  const { title } = useParams();
  const [book, setBook] = useState({});
  const navigate = useNavigate();

  const findBook = () => {
    const { book } = dataBooks.library.find(
      (item) => item.book.title === title
    );
    console.log(book);
    setBook(book);
  };

  useEffect(() => {
    findBook();
  }, []);

  return (
    <div className="container">
        <span className="back" onClick={() => navigate(-1)}>Volver</span>
      
      <div className="imgContainer">
        <img
          src={book.cover}
          alt={`portada de ${book.title}`}
          className="img"
        />
      </div>
      <div className="detailsContainer">
        <div className="meta">
          <p className="author">{book?.author?.name}</p>
          <p className="genre">{book.genre}</p>
        </div>
        <p className="title">{book.title}</p>
        <p className="synopsis">{`${book.synopsis} (${book.pages} páginas)`}</p>
        <div className="numbers">
          {/* <span className="pages">{book.pages}</span> */}
        </div>
        <div className="related">
          <p className="title">Libros relacionados: </p>
          <ul className="list">
            {book?.author?.otherBooks?.map((otherBook) => (
              <li key={otherBook} className="listItem">
                {otherBook}
              </li>
            ))}
          </ul>
        </div>
        <span className="isbn">isbn: {book.ISBN}</span>
      </div>
    </div>
  );
};
export default BookDetails;
