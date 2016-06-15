import React, {Component} from 'react';

import Introduction from './main/introduction.jsx';
import Events from './main/events.jsx';

// import Calendar from '../server/models/calendar.js';

class Main extends Component {
    render() {
        // console.log('props in main', this.props);
        let s = this.props.routes[0].s || this.props.routes[1].s
        return (
            <div className="container">
                <Introduction />
            </div>
        )
    }
}
export default Main;