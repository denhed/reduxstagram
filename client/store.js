import { createStore, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

// import root reducer
import rootReducer from './reducers/index';

import comments from './data/comments';
import posts from './data/posts';

// create an object from the default data
const defaultState = {
    posts,
    comments
};

// setup redux chrome devtools
const enhancers = compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
);


const store = createStore(rootReducer, defaultState, enhancers);

export const history = syncHistoryWithStore(browserHistory, store);

export default store;