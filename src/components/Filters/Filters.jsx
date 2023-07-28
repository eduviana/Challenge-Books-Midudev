import useBooksContext from "../../hooks/useBooksContext";
import "./filters.scss";

const Filters = () => {

  const { inputPage, setInputPage, minValue, maxValue, setSelectValue, uniqueGenres} = useBooksContext();

  return (
    <div className="filtersContainer">
      <div className="filterPerPages">
        <h2>Filtrar por páginas</h2>
        <div className="inputContainer">
          <div className="labels">
            <label htmlFor="range">{minValue}</label>
            <label htmlFor="range">{maxValue}</label>
          </div>
          <input
            type="range"
            name="range"
            id=""
            max={maxValue}
            min={minValue}
            value={inputPage}
            onChange={(e) => setInputPage(e.target.value)}
          />
          <span>{inputPage}</span>
        </div>
      </div>
      <div className="filterPerGenres">
        <h2>Filtrar por género</h2>
        <select onClick={(e) => setSelectValue(e.target.value)} defaultValue="">
          <option value="" hidden>
            Seleccione...
          </option>
          <option value="all">Ver todos</option>
          {uniqueGenres.map((genre) => (
            <option key={genre} value={genre}>
              {genre}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};
export default Filters;


