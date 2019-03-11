import React from 'react'
import { HistoryRouter, BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from '../Home/Home.jsx'
import Detail from '../Detail/Detail.jsx'
import GalleryView from '../Gallery/GalleryView.jsx'
let hashHistory = Router.hashHistory;

class App extends React.Component {
    render() {
        return (
            <HistoryRouter>
                <Switch>
                    <Route path={process.env.PUBLIC_URL + '/'} component={Home} />
                    <Route path={process.env.PUBLIC_URL + '/detail'} component={Detail} />
                    <Route path={process.env.PUBLIC_URL + '/gallery'} component={GalleryView} />
                </Switch>
            </HistoryRouter>
        );
    }
}

export default App;