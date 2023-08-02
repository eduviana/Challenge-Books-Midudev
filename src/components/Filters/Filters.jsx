import React, { useEffect, useState } from "react";
import useBooksContext from "../../hooks/useBooksContext";
import "./filters.scss";
import { getPages } from "../../utils/getPages";

const Filters = () => {
  const {
    inputPage,
    setInputPage,
    setSelectValue,
    uniqueGenres,
    books,
  } = useBooksContext();

  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(0);

  useEffect(() => {
    const { minValue, maxValue } = getPages(books);
    setMinValue(minValue);
    setMaxValue(maxValue);
  }, [books]);

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
            max={maxValue}
            min={minValue}
            value={inputPage}
            onChange={(e) => setInputPage(e.target.value)}
            aria-label="page-range-input"
          />
          <span>{inputPage}</span>
        </div>
      </div>
      <div className="filterPerGenres">
        <h2>Filtrar por género</h2>
        <select
          onClick={(e) => setSelectValue(e.target.value)}
          defaultValue=""
          aria-label="select-input"
        >
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
