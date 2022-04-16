import React from "react";
import logo2 from "../sass/source/star.svg";

const SingleMovie = (props) => {
  const showModal = () => {
    props.inVisible();
  };

  return (
    <div
      style={{ display: props.visible === true ? "block" : "none" }}
      onClick={showModal}
      className="singleMovie"
    >
      <div className="poster">
        <img src={props.poster} alt="This movie has no poster" />
      </div>
      <div className="posterInfo">
        <h2>
          {props.title} ({props.years.slice(0, 4)})
        </h2>
        <i>Original language: <span className="upper">{props.lang}</span></i>
        <br />
        <br />
        <div>
          <img className="logo2" src={logo2} alt="logo" />
          <br />
          <div className="ratings">
            <span className="rate">{props.rating}</span>/10
            <br />
            <span className="votes">{props.votes} votes</span>
          </div>
        </div>
        <br />
        <p className="lines">{props.desc}</p>
      </div>
    </div>
  );
};

export default SingleMovie;
