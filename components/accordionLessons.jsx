import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class AccordionLessons extends Component {

	render () {
		return (
			<div>
			  <h3>{this.props.s.lessonsText}</h3>
			</div>
		)
	}
}

export default AccordionLessons;