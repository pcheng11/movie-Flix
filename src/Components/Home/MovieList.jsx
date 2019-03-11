import React from 'react';
import MovieItem from './MovieItem.jsx';
import PropTypes from 'prop-types';

const MovieList = ({ movies }) => {
    const _movies = movies;
    const list = movies.map((movie, index) => {
                    return <MovieItem movie={movie} movies={_movies} key={index}/>
                });
    return <div className="movie-list"> {list} </div>;
        
};

MovieList.propTypes = {
    movies: PropTypes.array
}

export default MovieList;