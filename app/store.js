import { applyMiddleware, compose, createStore } from 'redux';
import persistState from 'redux-localstorage';

import testApp from './reducers';

var c = compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f,
  	persistState()
);

export const store = createStore(testApp, c);

export const dispatch = store.dispatch;
