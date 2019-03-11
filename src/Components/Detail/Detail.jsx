import React from 'react';
import RenderSlides from './Carousel.jsx';
import './Detail.scss';
import '../Gallery/GalleryMovies.scss';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

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
                        <Link className="option-button" to={process.env.PUBLIC_URL + '/'}>Search View</Link>
                        <Link className="option-button" to={process.env.PUBLIC_URL + '/gallery'}>Gallery View</Link>
                    </div>
                </div>
                <div className="detail">
                    <RenderSlides movies={this.state.movies} index={this.state.index} />
                </div>
            </div>
        );
    }
}

Detail.propTypes = {
    movies: PropTypes.array,
    curId: PropTypes.number
}

export default Detail;