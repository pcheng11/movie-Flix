import React from 'react';
import { Item, Grid, Image, Segment } from 'semantic-ui-react';
import Carousel from 'nuka-carousel';
import './Detail.scss';

class RenderSlides extends React.Component {

    render() {
        
        const slides = this.props.movies.map((movie, idx) => {
            return (
                    <div className="detail">
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
export default RenderSlides;