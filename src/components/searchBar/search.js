import React, { useState } from "react";
import "../../index.css";
import "./search.css";
import axios from "axios";
import { HiMagnifyingGlass } from "react-icons/hi2";

const SearchBar = () => {
  const [searchInput, setSearchInput] = useState("");
  const [results, setResults] = useState([]);

  const data = ["Choco", "Praline", "Twix", "Mars", "Crunch", "Lindt"];

  function handleInput(event) {
    const input = event.target.value;
    setSearchInput(input);

    axios
      .get(
        `https://public.opendatasoft.com//api/records/1.0/search/?dataset=evenements-publics-openagenda&q=&rows=100&start=10`
      )
      .then((response) => {
        const results = response.data[1];
        setResults(results);
      })
      .catch((error) => console.log(error));
  }

  return (
    <form>
      <div className="searchBar input">
        <div className="inputSearch">
          <input
            type="text"
            id="search-bar"
            placeholder="Rechercher tout"
            value={searchInput}
            onChange={handleInput}
          />
          <ul className="autocompletion">
            {searchInput &&
              data
                .filter((element) =>
                  element.toLowerCase().includes(searchInput.toLowerCase())
                )
                .map((element, index) => (
                  <li
                    onClick={() => setSearchInput(element)}
                    key={index}
                    className="autocomplete"
                  >
                    {element}
                  </li>
                ))}
          </ul>
          <button type="submit" className="searchBtn">
            <HiMagnifyingGlass className="icon" />
          </button>
        </div>
      </div>
    </form>
  );
};

export default SearchBar;
