import React, {Component} from 'react';
import {connect} from 'react-redux';
import ReactDOM from 'react-dom';
import {RouteHandler} from 'react-router';

// require('../client/styles/css/styles.css');

import Navbar from './navbar.jsx';
import Brandbar from './Brandbar.jsx';

// const mapStateToProps = (state) => {
//   return {
//   	userId: state.userId
//   }
// }

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
		let s = this.props.routes[0].s;
		console.log('app s', s);
		// console.log('props in app', this.props);
		return (
			<div>
			  <Brandbar />
			  <Navbar />
			  {this.props.children}
			</div>
		)
	}
}

export default App;

