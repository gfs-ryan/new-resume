import React from 'react'
import {
    Router,
    Route,
} from 'react-router-dom'
import Main from './components/main'
import Home from './components/home'
import NotFound from './components/errors/not_found'
import createBrowserHistory from 'history/createBrowserHistory'

const browserHistory = createBrowserHistory()

const Routes = {
    get: function (config) {
        return (
            <Router history={browserHistory}>
                <Route path='/' component={Main}>
                    <Route config={config} component={Home}/>
                    <Route path='*' component={NotFound}/>
                </Route>
            </Router>
        )
    }
}

export default Routes
