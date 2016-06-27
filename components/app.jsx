import React, {Component} from 'react';
import {connect} from 'react-redux';
import ReactDOM from 'react-dom';
import {RouteHandler} from 'react-router';

// require('../client/styles/css/styles.css');

import Navbar from './navbar.jsx';
import Brandbar from './brandbar.jsx';

class App extends Component {

	// componentWillMount () {

	// }

	render() {
		console.log('app state', this.state);
		console.log('app props', this.props);
		// let s = this.props.routes[0].s || this.props.route.s;

		return (
			<div>
			  <Brandbar />
			  <Navbar />
			  {this.props.children}
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	console.log('mapping state to props', state);
  return state;
}

const mapDispatchToProps = (dispatch) => {
	return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

