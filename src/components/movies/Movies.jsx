import React, { useState, useEffect } from "react";
import Movie from "../movie/Movie";
import api from "../../utilities/Api_key";
import SingleMovie from "../singleMovie/SingleMovie";

const Movies = (props) => {
  const [films, setFilms] = useState([]);
  const [data, setData] = useState({
    title: "",
    lang: "",
    rating: "",
    votes: "",
    desc: "",
    poster: "",
    years: "",
  });
  const [show, setShow] = useState("true");

  const visible = () => {
    show === true ? setShow(false) : setShow(true);
  };

  const getData = (data) => {
    setData(data);
    console.log("data: ", data);
  };

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${api}&query=${props.item}`
    )
      .then((res) => res.json())
      .then((data) => setFilms(data.results))
      .catch((error) => console.log(error));
  }, [props.item]);

  films.splice(8);

  return (
    <>
      <div>
        {films.map((film) => (
          <Movie
            key={film.id}
            title={film.title}
            lang={film.original_language}
            votes={film.vote_count}
            description={film.overview}
            poster={film.poster_path}
            rating={film.vote_average}
            year={film.release_date}
            clear={props.clear}
            getData={getData}
            visible={show}
            inVisible={visible}
          />
        ))}
        <SingleMovie
          years={data.years}
          poster={data.poster}
          title={data.title}
          lang={data.lang}
          rating={data.rating}
          votes={data.votes}
          desc={data.desc}
          visible={show}
          inVisible={visible}
        />
      </div>
    </>
  );
};

export default Movies;
