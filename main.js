import React from 'react';
import ReactDOM from 'react-dom';
import AppRoot from './components/appRoot.jsx';

// const rootElem = document.getElementById('root');

if (typeof window !== 'undefined') {
	window.onload = () => {
		ReactDOM.render( <AppRoot />, document.getElementById('root'));
	}
}
