import React, { useState, useEffect } from "react";
import Movie from "../movie/Movie";
import api from '../../utilities/Api_key'

const Movies = (props) => {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${api}&query=${props.item}`
    )
      .then((res) => res.json())
      .then((data) => setFilms(data.results))
      .catch((error) => console.log(error));
  }, [props.item]);
{console.log(props.item)}
  return (
    <>
      <div>
        {films.map((film)=>(<Movie 
          key={film.id}
          title={film.title}
          description={film.overview}
          poster={film.poster_path}
          rating={film.vote_average}
          year={film.release_date}
        />))}
      </div>
    </>
  );
};

export default Movies;
