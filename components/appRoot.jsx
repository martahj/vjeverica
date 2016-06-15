import React, {Component} from 'react';
import ReactDOM from 'react-dom';
// import { browserHistory } from 'react-router';
// require('../client/styles/css/styles.css');

import Brandbar from './brandbar.jsx';
import Navbar from './navbar.jsx';
import Routes from '../routing/routes.jsx';

class AppRoot extends Component {

	constructor (store) {
		console.log('props in app root', this.props);
	}

	render () {
		console.log('props passed into approot', this.props);
		return (
			<div>
			    <Brandbar />
				<Navbar />
				<Routes />
			</div>
		)
	}
}

export default AppRoot;