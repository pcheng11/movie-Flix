import React from 'react'
import { Input, Dropdown, Radio } from 'semantic-ui-react'
import MovieList from './MovieList.jsx';
import tmdb from '../../api/tmdb.jsx'
import './Home.scss'
import { Link } from 'react-router-dom'

class Home extends React.Component {

    constructor() {
        super();
        this.accessToken = '';
        this.state = { movies: [], inputVal: '', sortBy: "", descChecked: false, ascendChecked: false}
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
        
        console.log(value);
        if (value === 'Title') {
            this.setState({ movies: this.state.movies.sort((a, b) => (a.title > b.title) ? 1 : -1),
                descChecked: false,
                ascendChecked: false,
                sortBy:'Title'
            });
        }
        if (value === 'VoteAverage') {
            this.setState({ movies: this.state.movies.sort((a, b) => (a.vote_average < b.vote_average) ? 1 : -1),
                descChecked: false,
                ascendChecked: false,
                sortBy:'VoteAverage'
            });
        }
        if (value === 'Ascending' && this.state.sortBy === 'VoteAverage') {
            this.setState({ movies: this.state.movies.sort((a, b) => (a.vote_average < b.vote_average) ? -1 : 1),
                            descChecked: false,
                            ascendChecked: true });
        }
        if (value === 'Descending' && this.state.sortBy === 'VoteAverage') {
            this.setState({ movies: this.state.movies.sort((a, b) => (a.vote_average < b.vote_average) ? 1 : -1),
                            descChecked: true,
                            ascendChecked: false });
        }
        if (value === 'Ascending' && this.state.sortBy === 'Title') {
            this.setState({ movies: this.state.movies.sort((a, b) => (a.title < b.title) ? -1 : 1),
                descChecked: false,
                ascendChecked: true });
        }
        if (value === 'Descending' && this.state.sortBy === 'Title') {
            this.setState({ movies: this.state.movies.sort((a, b) => (a.title < b.title) ? 1 : -1),
                descChecked: true,
                ascendChecked: false });
        }
    }

    render() {
        const options = [
            { key: 'Vote-Average', text: 'Vote Average', value: 'VoteAverage' },
            { key: 'Title', text: 'Title', value: 'Title' },
        ]
        const {descChecked, ascendChecked} = this.state;
        return (
            <div>
                <div className="header">
                        <h1> MovieFlix</h1>
                        <div className="options">
                            <Link className="option-button" to={process.env.PUBLIC_URL + '/gallery'}>Gallery View</Link>
                        </div>
                </div>
                <div className="main">
                    <div className="search">
                        <Input className="search-bar"
                                placeholder='Search...'
                                onChange={this.updateInputValue}
                                label={<Dropdown options={options} 
                                placeholder="Sort By" 
                                onChange={this.sort}/>}
                                labelPosition='right'
                        />
                        <div className="radio-button">
                            <Radio label='Ascending'
                                    value="Ascending"
                                    onClick={this.sort}
                                    checked={ascendChecked}
                            />
                            <Radio label='Descending'
                                value="Descending"
                                onClick={this.sort}
                                checked={descChecked}
                            />
                        </div>
                    </div>
                        <MovieList className="movie-list" movies={this.state.movies} />
                </div>
                </div>
        );
    }
}


export default Home;