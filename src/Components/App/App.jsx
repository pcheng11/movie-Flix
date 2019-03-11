import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from '../Home/Home.jsx'
import Detail from '../Detail/Detail.jsx'
import GalleryView from '../Gallery/GalleryView.jsx'
let hashHistory = Router.hashHistory;

class App extends React.Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route path={process.env.PUBLIC_URL + '/'} component={Home} />
                    <Route path={process.env.PUBLIC_URL + '/detail'} component={Detail} />
                    <Route path={process.env.PUBLIC_URL + '/gallery'} component={GalleryView} />
                </Switch>
            </Router>
        );
    }
}

export default App;