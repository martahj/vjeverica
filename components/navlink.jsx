import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Link from 'react-router/lib/Link';

class Navlink extends Component {

	render () {
		return (
			<li>
			  <Link to={this.props.route.routeLink}>{this.props.route.routeText}</Link>
			</li>
		)
	}
}
export default Navlink