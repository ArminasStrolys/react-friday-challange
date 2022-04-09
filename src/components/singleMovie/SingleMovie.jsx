import React from 'react';

const Singlemovie = (props) => {
    return (
        <div style={{display:`${props.hide}`}} className='singleMovie'>
            <img src={`https://image.tmdb.org/t/p/w300/${props.hide}`} alt="movie poster" />
        </div>
    );
}

export default Singlemovie;
