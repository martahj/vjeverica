import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';


class Bio extends Component {

	render () {
		// let s = this.props.routes[0].s || this.props.routes[1].s
		// console.log('s in bio', s);
		// console.log('props in bio', this.props);

		return (
			<div>
			  <h3></h3>
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

export default connect(mapStateToProps, mapDispatchToProps)(Bio);
