import React from 'react';
import MovieItem from './MovieItem.jsx';

const MovieList = ({ movies }) => {
    const _movies = movies;
    const list = movies.map((movie, index) => {
                    return <MovieItem movie={movie} movies={_movies} key={index}/>
                });
    return <div className="movie-list"> {list} </div>;
        
};
export default MovieList;