import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {RouteHandler} from 'react-router';
// import {Router, IndexRoute, Route, RouteHandler} from 'react-router';

// require('../client/styles/css/styles.css');

import Navbar from './navbar.jsx';
import Brandbar from './Brandbar.jsx';


class App extends Component {

	render() {

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

// const routes = (
// 	<Router >
// 	  <Route path="/" component={App}>
// 	    <IndexRoute component={Main} />
// 	    <Route path="bio" component={Bio} />
// 	    <Route path="/performances" component={UpcomingPerformances} />
// 	    <Route path="lessons" component={AccordionLessons} />
// 	    <Route path="cds" component={BuyCds} />
// 	    <Route path="contact" component={Contact} />
// 	  </Route>
// 	</Router>
// )

// Router.run(routes, (Handler) => {
// 	ReactDOM.render( <Handler />, document.body);
// })