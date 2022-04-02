import React, { useState } from "react";
import logo1 from "../sass/source/movie.svg";
import Movies from "../movies/Movies";

const Search = () => {
  const [item, setItem] = useState("");

  return (
    <div className="search">
      <form>
        <div className="anchor">
          <a href="/">
            <img className="logo1" src={logo1} alt="logo" />
          </a>

          <input
            type="text"
            onChange={(e) => setItem(e.target.value)}
            className="searchBar"
            placeholder="Search"
          />

          {item.length > 2 && <Movies item={item} />}
        </div>
      </form>
    </div>
  );
};

export default Search;
