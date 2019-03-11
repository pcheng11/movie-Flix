import React from 'react';
import { Grid, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom'
import './GalleryMovies.scss'

const GalleryMovies = ({ movies }) => {
    const list = movies.map((movie, idx) => {
        return (
            <Grid.Column key={idx} id="grid-item" mobile={8} tablet={4} computer={2}>
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
export default GalleryMovies;
