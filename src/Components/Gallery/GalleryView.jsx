import React, { Component } from 'react'
import tmdb from '../../api/tmdb.jsx'
import GalleryMovies from './GalleryMovies.jsx'
import './GalleryMovies.scss'
import { NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'
 
export default class GalleryView extends Component {
    state = { genres: [], filteredMovies: [], activeItem: "Action"}

    componentDidMount() {
        tmdb.get('/genre/movie/list', {
            params: {
                api_key: 'd2e837497270b113fdd2b34bbd1d124c',
            }
        })
        .then(response => response.data)
        .then(data => this.setState({ genres: data.genres }))
    }

    filterMovies = (value, name) => {
        tmdb.get('/discover/movie', {
            params: {
                api_key: 'd2e837497270b113fdd2b34bbd1d124c',
                with_genres: value
            }
        })
        .then(response => response.data)
            .then(data => this.setState({ filteredMovies: data.results, activeItem: name }));
    }

    handleItemClick = (value) => {
        this.filterMovies(value);
    }

    render() {
        const { genres, filteredMovies } = this.state;
        return (
            <div>
                <div className="header">
                    <h1> MovieFlix</h1>
                    <div className="options">
                        <a className="option-button" to={process.env.PUBLIC_URL + "/"}>Search View</a>
                        <NavDropdown className="option-button" title="Genres" id="basic-nav-dropdown">
                            {genres.map((genre, i) => {
                                return <NavDropdown.Item 
                                            color="white" 
                                            id="menubar-item" 
                                            key={i} 
                                            name={genre.name} 
                                            eventKey={genre.id} 
                                            onSelect={this.handleItemClick}>
                                        {genre.name}
                                        </NavDropdown.Item>
                            })}
                        </NavDropdown>
                    </div>
                </div>
                <div id="gallery-view">
                        <GalleryMovies movies={filteredMovies} />
                </div>
            </div>
            
        );
    }
}
