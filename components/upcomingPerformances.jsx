import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Calendar from './upcomingPerformances/calendar';

class UpcomingPerformances extends Component {

	render () {
		return (
			<div>
				<div className="row">
						<div className="box">
						  <h3>Upcoming Performances</h3>
							<Calendar />
						</div>
					</div>
			</div>
		)
	}
}

export default UpcomingPerformances;
