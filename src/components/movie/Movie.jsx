import React from "react";

const Movie = (props) => {

  const showModal = () => {
    props.getData(`https://image.tmdb.org/t/p/w300${props.poster}`)
    props.inVisible()
    // props.clear();
    // <SingleMovie show={show} poster={`https://image.tmdb.org/t/p/w300${props.poster}`} />
  };
  return (
    <>
      <div style={{display:props.visible === true ? 'none' : 'block'}} onClick={showModal} className="dropList">
        <p className="dropText">{props.title}</p>
        <p className="rating">
          {props.rating} Rating, {props.year}
        </p>
      </div>
      {/* <SingleMovie show={show} poster={`https://image.tmdb.org/t/p/w300${props.poster}`} /> */}
    </>
  );
};

export default Movie;

// https://www.themoviedb.org/settings/api
// https://developers.themoviedb.org/3/getting-started/search-and-query-for-details
