import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class Bio extends Component {

	render () {
		let s = this.props.routes[0].s;
		console.log('s in bio', s);

		return (
			<div>
			  <h3></h3>
			</div>
		)
	}
}

export default Bio;