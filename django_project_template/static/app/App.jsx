import React from 'react';
import ReactDOM from 'react-dom';
import {
    Router,
    Route,
    Redirect,
    IndexRedirect,
    Link,
    browserHistory
} from 'react-router';
import { Provider } from 'react-redux';

import BaseLayout from './containers/BaseLayout';
import Users from './containers/Users';
import Board from './containers/Board';
import configureStore from './stores/storeConfigure';

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={BaseLayout}>
                <IndexRedirect to="users" />
                <Route path="users" component={Users} >
                </Route>
                <Route path="board" component={Board} />
            </Route>
        </Router>
    </Provider>, document.getElementById('app')
)
