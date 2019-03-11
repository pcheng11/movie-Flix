import React from 'react'
import { Input, Dropdown } from 'semantic-ui-react'
import MovieList from './MovieList.jsx';
import tmdb from '../../api/tmdb.jsx'
import './Home.scss'

class Home extends React.Component {

    constructor() {
        super();
        this.accessToken = '';
        this.state = { movies: [], inputVal: '', selected: null }
    }

    updateInputValue = (e, { value }) => {

        this.setState({ inputVal: value });
        tmdb.get('search/movie', {
            params: {
                api_key: 'd2e837497270b113fdd2b34bbd1d124c',
                query: value
            }
        })
        .then(response => response.data)
        .then(data => this.setState({ movies: data.results }));
    };
    
    sort = (e, {value}) => {
        if (value === 'Title') {
            this.setState({ movies: this.state.movies.sort((a, b) => (a.title > b.title) ? 1 : -1)});
        }
        if (value === 'VoteAverage') {
            this.setState({ movies: this.state.movies.sort((a, b) => (a.vote_average < b.vote_average) ? 1 : -1) });
        }
    }

    render() {
        const options = [
            { key: 'Vote-Average', text: 'Vote Average', value: 'VoteAverage' },
            { key: 'Title', text: 'Title', value: 'Title' },
        ]
        return (
            <div>
                <div className="header">
                        <h1> MovieFlix</h1>
                        <div className="options">
                            <a className="option-button" href={process.env.PUBLIC_URL + "/gallery"}>Gallery View</a>
                        </div>
                </div>
                <div className="main">
                    <Input className="search"
                        placeholder='Search...'
                        onChange={this.updateInputValue}
                        label={<Dropdown options={options} placeholder="Sort By" onChange={this.sort}/>}
                        labelPosition='right'
                    />
                    <MovieList className="movie-list" movies={this.state.movies} />
                </div>
                </div>
        );
    }
}

export default Home;