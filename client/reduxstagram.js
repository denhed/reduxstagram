import React from 'react';
import {render} from 'react-dom';

// import css
import css from './styles/style.styl';

// import components
import App from './components/App';
import Single from './components/Single';
import PhotoGrid from './components/PhotoGrid';

// import react router deps
import { Router, Route, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './store';

// sentry.io error tool setup
import Raven from 'raven-js';
import { sentry_url } from './data/config';
Raven.config(sentry_url).install();

// send raven user report, use with try / catch
// Raven.captureMessage('Somthing bad happend');
// Raven.showReportDialog();

const router = (
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={App}>
                <IndexRoute component={PhotoGrid}></IndexRoute>
                <Route path="/view/:postId" component={Single} ></Route>
            </Route>
        </Router>
    </Provider>
);

render(router, document.getElementById('root'));
