import React, { useState } from 'react';

const Movie = (props) => {
    const [hide, setHide] = ('')
    // const hanldeSomething = (e) => {
    //     console.log(e.target.parentElement.lastChild.innerText)
    // }
    return (
        <div onClick={(e)=>console.log(props.poster)} className='dropList'>
            <p className='dropText'>{props.title}</p>
            <p className='rating'>{props.rating} Rating, {props.year}</p>
            <span style={{display:'none'}}>{props.poster}</span>
            {/* {console.log(hide)} */}
        </div>
    );
}

export default Movie;


// https://www.themoviedb.org/settings/api
// https://developers.themoviedb.org/3/getting-started/search-and-query-for-details