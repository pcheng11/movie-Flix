import React, { Component } from 'react'
import tmdb from '../../api/tmdb.jsx'
import GalleryMovies from './GalleryMovies.jsx'
import './GalleryMovies.scss'
import { Dropdown } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

export default class GalleryView extends Component {
    state = { genre_options: [], filteredMovies: [] }

    componentDidMount() {
        tmdb.get('/genre/movie/list', {
            params: {
                api_key: 'd2e837497270b113fdd2b34bbd1d124c',
            }
        })
        .then(response => response.data)
        .then(data => this.setState({ genre_options: data.genres.map((genre) => { return { value: genre.id, text: genre.name}}) }))

        this.filterMovies(28);
    }

    filterMovies = (value) => {
        tmdb.get('/discover/movie', {
            params: {
                api_key: 'd2e837497270b113fdd2b34bbd1d124c',
                with_genres: value
            }
        })
        .then(response => response.data)
        .then(data => this.setState({ filteredMovies: data.results }));
    }

    handleItemClick = (e, {value}) => {
        this.filterMovies(value);
    }

    render() {
        const { genre_options, filteredMovies } = this.state;
        return (
            <div>
                <div className="header">
                    <h1> MovieFlix</h1>
                    <div className="options">
                        <Link className="option-button" to={process.env.PUBLIC_URL + "/"}>Search View</Link>
                        <Dropdown 
                            className="option-button"
                            placeholder='Select Genre'
                            onChange={this.handleItemClick}
                            selection 
                            options={genre_options}
                            />
                    </div>
                </div>
                <div id="gallery-view">
                    <GalleryMovies movies={filteredMovies} />
                </div>
            </div>
            
        );
    }
}
