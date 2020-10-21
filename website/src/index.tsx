import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Root from './scripts/Root';
import configureStore from './scripts/state/store';
import * as initialState from './scripts/state/store/initialState';

const rootElement = document.getElementById('root');
const reduxStore = configureStore({ ...initialState });

ReactDOM.render(<Root store={reduxStore} />, rootElement);
