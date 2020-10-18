import React from 'react';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from '../App';
import history from './history';

const Root = ({ store }) => (
    <Router history={history}>
        <Provider store={store}>
            <App />
        </Provider>
    </Router>
);

export default Root;