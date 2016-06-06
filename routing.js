import React from 'react';
import ReactDOM from 'react-dom';

import Routes from './routing/routes.jsx';

require('./client/styles/css/styles.css');


if (typeof window !== 'undefined') {
	window.onload = () => {
		ReactDOM.render( <Routes />, document.getElementById('root'));
	}
}
