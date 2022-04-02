import React from 'react';
import api from '../../utilities/Api_key'

const Movie = (props) => {
    return (
        <a href={`https://api.themoviedb.org/3/search/movie?api_key=${api}&query=${props.item}`} className='dropList'>
            <p className='dropText'>{props.title}</p>
            <p className='rating'>{props.rating} Rating, {props.year}</p>
        </a>
    );
}

export default Movie;
