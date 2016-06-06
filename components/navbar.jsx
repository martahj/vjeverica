import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Navlink from './navlink.jsx';

class Navbar extends Component {


	render () {
		// const performancesLink = path.resolve(__dirname, '')

		const routes = [ 
		                 {routeText: "Home", routeLink: "/", routeKey: "home"},
		                 {routeText: "Upcoming Performances", routeLink: "performances", routeKey: "performances"},
		                 {routeText: "Bio", routeLink: "bio", routeKey: "bio"},
		                 {routeText: "Contact", routeLink: '/contact', routeKey: "contact"},
		                 {routeText: "CDs", routeLink: "/cds", routeKey: "cds"},
		                 {routeText: "Lessons", routeLink: "/lessons", routeKey: "lessons"}
		                ];

		const getRouteLinks = (routes) => 
		                        routes.map( route => 
		                        	<Navlink route={route} key={route.routeKey}/>
		                        );

		const routeLinks = getRouteLinks(routes);

		return (
			<nav className="navbar navbar-default" role="navigation">
			    <div className="container">

			        <div className="navbar-header">
			            <button type="button" 
			                    className="navbar-toggle"
			                    data-toggle="collapse" 
			                    data-target="#bs-example-navbar-collapse-1">
			                <span className="sr-only">Toggle navigation</span>
			                <span className="icon-bar"></span>
			                <span className="icon-bar"></span>
			                <span className="icon-bar"></span>
			            </button>

			            <a className="navbar-brand" href="index.html">Vjeverica Text!!</a>
			        </div>

			        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
			            <ul className="nav navbar-nav">
			              {routeLinks}
			            </ul>
			        </div>

			    </div>
			</nav>
		)
	}

}

export default Navbar;




