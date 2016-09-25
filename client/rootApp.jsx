import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import ClientRoutes from '../routing/clientRoutes.jsx';


import store from '../store/store.js';
// console.log('store', store);
// const myStore = store();
// console.log('store', store, 'my store', myStore);

import defaultState from '../store/defaultState';

require('./styles/css/styles.css');

// if (typeof window !== 'undefined') {
// 	window.onload = () => {
// 		ReactDOM.render( <Provider store={myStore}>
// 			               <ClientRoutes />
// 			             </Provider>
// 			             , document.getElementById('root'));
// 	}
// }


if (typeof window !== 'undefined') {
	window.onload = () => {
		ReactDOM.render(
			<Provider store={store}>
			  <ClientRoutes s={defaultState} />
			</Provider>
			, document.getElementById('root'));
	}
}
