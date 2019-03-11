import React from 'react';
import { Grid, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom'
import './GalleryMovies.scss'
import PropTypes from 'prop-types';

const GalleryMovies = ({ movies }) => {
    const list = movies.map((movie, idx) => {
        return (
            <Grid.Column key={idx} id="grid-item" mobile={8} tablet={5} computer={4}>
                <Link to={{ pathname: process.env.PUBLIC_URL + '/detail', state: { movies: movies, curId: movie.id } }}>
                <div id="movie">
                    <Image id="movie-image" src={'http://image.tmdb.org/t/p/original'+movie.poster_path} />
                </div>
                </Link>
            </Grid.Column>
        );
    });
    return (
        <Grid id="grid">
            {list}
        </Grid>

    );
}

GalleryMovies.propTypes = {
    movies: PropTypes.array
}

export default GalleryMovies;
