import React, {Component} from 'react';
import {connect} from 'react-redux';
import ReactDOM from 'react-dom';
import {RouteHandler} from 'react-router';

// require('../client/styles/css/styles.css');

import Navbar from './navbar.jsx';
import Brandbar from './brandbar.jsx';

//BAD PRACTICE JUST TO SEE IF FETCH HAPPENS
// import getInitialState from '../client/api/getInitialState.js';
// import {fetchData} from '../actions/fetchData.js';
import {getData} from '../actions/fetchData.js';
import {receiveData} from '../actions/fetchData.js';
import getInitialState from '../client/api/getInitialState.js';
console.log('getInitialState', getInitialState);

class App extends Component {

	componentWillMount () {
		// console.log('app state', this.state);
		// console.log('app props', this.props);
		// console.log('about to call fetch data')
		this.props.fetchData();
	}

	render() {
		// console.log('app state', this.state);
		// console.log('app props', this.props);
		// console.log('about to call fetch data')
		// this.props.fetchData();
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
	// console.log('mapping state to props', state);
  return {
  	fetchData: state.fetchData
  }
   return state;
}

const mapDispatchToProps = (dispatch) => {
	return {
		fetchData: () => {
			dispatch(getData())

			return getInitialState()
			  .then( data => {
			  	// console.log('data from getInitialState', data);
			  	dispatch(receiveData(data));
			  })
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
