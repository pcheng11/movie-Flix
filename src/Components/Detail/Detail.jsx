import React from 'react';
import RenderSlides from './Carousel.jsx';
import './Detail.scss';
import '../Gallery/GalleryMovies.scss'

class Detail extends React.Component {
    state = { index: 0, movies: []};

    static getDerivedStateFromProps(props) {
        const { movies, curId } = props.location.state;
        const match = (movie) => {
            return movie.id === curId;
        }
        const index = movies.findIndex(match);
        return {
            index: index,
            movies: movies
        };
    }
    
    render() {
        return (
            <div className="detailPage">
                <div className="header">
                    <h1> MovieFlix </h1>
                    <div className="options">
                        <a className="option-button" href="/search">Search View</a>
                        <a className="option-button" href="gallery">Gallery View</a>
                    </div>
                </div>
                <div className="detail">
                    <RenderSlides movies={this.state.movies} index={this.state.index} />
                </div>
            </div>
        );
    }
}
export default Detail;