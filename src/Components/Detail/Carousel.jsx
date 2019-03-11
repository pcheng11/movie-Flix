import React from 'react';
import { Image } from 'semantic-ui-react';
import Carousel from 'nuka-carousel';
import './Detail.scss';
import PropTypes from 'prop-types';

class RenderSlides extends React.Component {

    render() {
        
        const slides = this.props.movies.map((movie, idx) => {
            return (
                    <div className="detail" key={idx}>
                        <Image className="cardImg" src={'http://image.tmdb.org/t/p/original' + movie.poster_path} />
                        <div className="info">
                            <b> {movie.title} </b>
                            <br /> Vote Average: {movie.vote_average}
                            <br /> Release Date: {movie.release_date}
                        <br /><br /><p> {movie.overview} </p>
                        </div>
                    </div>
            );
        });
        return (
            <Carousel 
                slideIndex={this.props.index}
            >
                {slides}
            </Carousel>
            
        );
    }
};

RenderSlides.propTypes = {
    movies: PropTypes.array
}

export default RenderSlides;