import React from "react";

const Movie = (props) => {
  const showModal = () => {
    props.getData({
      title: props.title,
      lang: props.lang,
      rating: props.rating,
      votes: props.votes,
      desc: props.description,
      years: props.year,
      poster: `https://image.tmdb.org/t/p/w300${props.poster}`,
    });
    props.inVisible();
  };

  return (
    <>
      <div
        style={{ display: props.visible === true ? "none" : "block" }}
        onClick={showModal}
        className="dropList"
      >
        <p className="dropText">{props.title}</p>
        <p className="rating">
          {props.rating} Rating, {props.year && props.year.slice(0, 4)}
        </p>
      </div>
    </>
  );
};

export default Movie;
