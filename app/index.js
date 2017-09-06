import React from 'react';
import { render } from 'react-dom';
import MainPage from './components/MainPage';

import { Route, Router, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';
import { store } from './store';

// if (STAGE !== 'production') {
// 	console.log(STAGE);
	require('./styles/index.sass');
// }

render(
    <Provider store={store}>
        <MainPage />
    </Provider>,
	document.getElementById('root')
);
