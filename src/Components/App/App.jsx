import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from '../Home/Home.jsx'
import Detail from '../Detail/Detail.jsx'
import GalleryView from '../Gallery/GalleryView.jsx'
// let hashHistory = Router.hashHistory;

class App extends React.Component {
    render() {
        return (
            <BrowserRouter basename={process.env.PUBLIC_URL}>
                <Switch>
                    <Route path= '/' component={Home} />
                    <Route path={process.env.PUBLIC_URL + '/detail'} component={Detail} />
                    <Route path={process.env.PUBLIC_URL + '/gallery'} component={GalleryView} />
                </Switch>
            </BrowserRouter>
        );
    }
}

export default App;