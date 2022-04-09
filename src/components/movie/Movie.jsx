import React, { useState } from 'react';
import api from '../../utilities/Api_key'
import Singlemovie from '../singleMovie/SingleMovie';

const Movie = (props) => {
    const [hide, setHide] = ('')
    return (
        <span onClick={() => setHide(props.poster)}  className='dropList'>
            <p className='dropText'>{props.title}</p>
            <p className='rating'>{props.rating} Rating, {props.year}</p>
        </span>
    );
}

export default Movie;


// https://www.themoviedb.org/settings/api
// https://developers.themoviedb.org/3/getting-started/search-and-query-for-details