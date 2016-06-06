import React, {Component} from 'react';

import Introduction from './main/introduction.jsx';
import Events from './main/events.jsx';

// import Calendar from '../server/models/calendar.js';

class Main extends Component {
    render() {

    	// let allEvents = Calendar.getEvents();

        return (
            <div className="container">
                <Introduction />
            </div>
        )
    }
}
export default Main;