import React from "react";

const SingleMovie = (props) => {
  // const handleShow = () => {
  //     style={{display}}
  // }

  console.log(props.show);
  // console.log(props.poster)

  const showModal = () => {
    props.inVisible()
    // props.clear();
    // <SingleMovie show={show} poster={`https://image.tmdb.org/t/p/w300${props.poster}`} />
  };

  return (
    <div style={{display:props.visible === true ? 'block' : 'none'}} onClick={showModal} className="singleMovie">
      {/* <div style={{display:'none'}} className='singleMovie'> */}
      <div className="poster">
        <img src={props.poster} alt="This movie has no poster" />
      </div>
      <div className="posterInfo">
        <h2>Movie title(years)</h2>
        <i>Original language: (lang)</i>
        <br />
        <br />
        <div>
            star logo
            (rating)
            (num) votes
        </div>
        <br />
        <p className="lines">(description description description description description description description description description description description description description description description description description description description description description description description description description description description description description)</p>
      </div>
    </div>
  );
};

export default SingleMovie;
