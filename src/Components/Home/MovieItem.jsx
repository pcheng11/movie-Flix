import React from 'react'
import { Link } from 'react-router-dom'
import { Grid, Image } from 'semantic-ui-react'
import './MovieItem.scss';

const MovieItem = ({ movie, movies }) => {
    return (
        <Link to={{ pathname: "/detail", state: { movies: movies, curId: movie.id } }}>
        <Grid id="result-row">
            <Grid.Column mobile={10} tablet={4} computer={5}>
                <Image id="result-image" src={'http://image.tmdb.org/t/p/original' + movie.poster_path} />
            </Grid.Column>
            <Grid.Column id="info" mobile={6} tablet={12} computer={11}>
                <b> {movie.title} </b>
                <br /> Vote Average: {movie.vote_average}
                <br /> Release Date: {movie.release_date}
            </Grid.Column>
        </Grid>
        </Link>
    );

};
export default MovieItem;