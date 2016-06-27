import React, {Component} from 'react';
import {connect} from 'react-redux';
import ReactDOM from 'react-dom';
import {RouteHandler} from 'react-router';

// require('../client/styles/css/styles.css');

import Navbar from './navbar.jsx';
import Brandbar from './brandbar.jsx';

const mapStateToProps = (state) => {
	console.log('mapping state to props', state);
  return state;
}

const mapDispatchToProps = (dispatch) => {
	return {
		onClick: (something) => {
			dispatch(a(something))
		}
	}
}

// const mapDispatchToProps = (dispatch) => {
// 	return {}
// }

// const App = ({userId}) => {
// 	console.log('app user id', userId);
// 	return (
// 		<div>
// 		  <h3>Welcome {userId}</h3>
// 		  <Brandbar />
// 		  <Navbar />
// 		  {this.props.children}
// 		</div>
// 	)
// }

// export default connect(mapStateToProps, mapDispatchToProps)(App);

// connect( state => ({
// 	userId: state.userId
// }))



// no redux

class App extends Component {

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

export default connect(mapStateToProps, mapDispatchToProps)(App);

// export default App;

