import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class Events extends Component {

	// getDefaultState() { //might be wrong name?
	// 	return {
	// 		featured: [],
	// 		upcoming: []
	// 	}
	// }

	/*
/*
Pricing (text)
Location - map
A photo 
How to register
Location
Details
Start time
End time
Date
Title
Featured
Link

*/

	render() {
		let allEvents = this.props.allEvents;
		let featured = allEvents.filter( e => e.featured);
		let upcoming = allEvents.filter( e => !e.featured);

		
		return (
			<div className="col-md-4 text-center">
			  <h3>Featured events</h3>
			  <h3>Upcoming events</h3>
			</div>
		)
	}
}

export default Events;