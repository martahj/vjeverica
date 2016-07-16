import React, {Component} from 'react';
import {connect} from 'react-redux';
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

const mapStateToProps = (state) => {
  return state;
}

const mapDispatchToProps = (dispatch) => {
	return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(AccordionLessons);
