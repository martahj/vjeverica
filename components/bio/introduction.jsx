import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import Poem from './poem.jsx';

class Introduction extends Component {
	render () {
		return (
			<div className="row">
			  <div className="box">
				  <div className="col-lg-12 text-center">
				    <Poem />

				    <p>
				    </p>
				  </div>

				  <div className="col-md-4 text-center">
				    <h3>Upcoming events</h3>
				  </div>
			  </div>
			</div>
		)
	}
}

export default Introduction;