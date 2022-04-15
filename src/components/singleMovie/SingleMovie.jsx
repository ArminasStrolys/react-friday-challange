import React from 'react';
import Movie from '../movie/Movie';

const Singlemovie = (props) => {
    return (
        <div style={{display:`${props.hide}`}} className='singleMovie'>
            <img src={`https://image.tmdb.org/t/p/w300${props.poster}`} alt="movie poster" />
        <p>{props.rating}</p>
        </div>
    );
}

export default Singlemovie;
