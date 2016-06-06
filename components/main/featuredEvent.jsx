import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class FeaturedEvent extends Component {
	render () {
		let event = this.props.event;

		return (
			<div>
			  <h6>{event.title}</h6>
			</div>
		)
	}
}
export default FeaturedEvent;