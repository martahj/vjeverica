import React, {Component} from 'react';

import Introduction from './main/introduction.jsx';
import Events from './main/events.jsx';

// import Calendar from '../server/models/calendar.js';

class Main extends Component {
    render() {
        let s = this.props.routes[0].s;
        console.log('s in main', s);
        return (
            <div className="container">
                <h3></h3>
                <Introduction />
            </div>
        )
    }
}
export default Main;