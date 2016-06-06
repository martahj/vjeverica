import React from 'react';
import ReactDOM from 'react-dom';

// import ClientRoutes from '../routing/clientRoutes.jsx';
import ClientRoutes from '../routing/clientRoutes.jsx';

require('./styles/css/styles.css');


if (typeof window !== 'undefined') {
	window.onload = () => {
		ReactDOM.render( <ClientRoutes />, document.getElementById('root'));
	}
}
