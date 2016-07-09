import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import { browserHistory } from 'react-router';
import { routerMiddleware } from 'react-router-redux';

import { user } from '../reducers/Users';

const middleware = routerMiddleware(browserHistory);

export default function configureStore() {
    const reducers = combineReducers({
        user,
    });
    const store = createStore(
        reducers,
        compose(
            applyMiddleware(middleware),
            // for redux devtool extension
            window.devToolsExtension ? window.devToolsExtension() : f => f
        )
    );
    return store;
}
