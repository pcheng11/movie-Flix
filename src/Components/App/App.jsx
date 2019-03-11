import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from '../Home/Home.jsx'
import Detail from '../Detail/Detail.jsx'
import GalleryView from '../Gallery/GalleryView.jsx'
let hashHistory = Router.hashHistory;

class App extends React.Component {
    render() {
        return (
            <BrowserRouter history={history} basename={process.env.PUBLIC_URL}>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path='/detail' component={Detail} />
                    <Route exact path='/gallery' component={GalleryView} />
                </Switch>
            </BrowserRouter>
        );
    }
}

export default App;