import React from 'react';
import { hydrate } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import appReducer from './reducers.js';
import App from './components/App.jsx';
import './primary.scss';

// Grab the state from a global variable injected into the server-generated HTML
const preloadedState = window.__PRELOADED_STATE__;

// Allow the passed state to be garbage-collected
delete window.__PRELOADED_STATE__;

// Create Redux store with initial state
const store = createStore(appReducer, preloadedState, applyMiddleware(ReduxThunk));

hydrate(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);
