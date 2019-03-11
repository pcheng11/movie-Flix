import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from '../Home/Home.jsx'
import Detail from '../Detail/Detail.jsx'
import GalleryView from '../Gallery/GalleryView.jsx'

class App extends React.Component {
    
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/search" component={Home} />
                    <Route exact path='/detail' component={Detail} />
                    <Route exact path='/gallery' component={GalleryView} />
                </Switch>
            </Router>
        );
    }
}

export default App;