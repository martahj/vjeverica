import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';

import Introduction from './bio/introduction';
import History from './bio/history';

class Bio extends Component {

	render () {
		// let s = this.props.routes[0].s || this.props.routes[1].s
		// console.log('s in bio', s);
		// console.log('props in bio', this.props);

		return (
			<div>
			  <Introduction />
				<History />
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
