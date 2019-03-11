import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from '../Home/Home.jsx'
import Detail from '../Detail/Detail.jsx'
import GalleryView from '../Gallery/GalleryView.jsx'
// let hashHistory = Router.hashHistory;

class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path= {process.env.PUBLIC_URL + '/'} component={Home} />
                    <Route path='/detail' component={Detail} />
                    <Route path='/gallery' component={GalleryView} />
                </Switch>
            </BrowserRouter>
        );
    }
}

export default App;