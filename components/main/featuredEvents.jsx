import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import FeaturedEvent from './featuredEvent.jsx';

class FeaturedEvents extends Component {
/*
Pricing (text)
Location - map
A photo 
How to register
Location
Details
Start time
End time
Start date
End date
Title
Featured
Link

*/


	render () {

		let events = this.props.events.map( event => <FeaturedEvent event={event} />)

		return (
		  <div className="col-md-4 text-center">
		    <h3>Featured events</h3>
		    {events}
		  </div>
		)
	}
}

export default FeaturedEvents;