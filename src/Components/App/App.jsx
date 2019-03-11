import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from '../Home/Home.jsx'
import Detail from '../Detail/Detail.jsx'
import GalleryView from '../Gallery/GalleryView.jsx'

class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path= {process.env.PUBLIC_URL + '/'} component={Home} />
                    <Route exact path= {process.env.PUBLIC_URL+ '/detail'} component={Detail} />
                    <Route exact path= {process.env.PUBLIC_URL + '/gallery'} component={GalleryView} />
                </Switch>
            </BrowserRouter>
        );
    }
}

export default App;