import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';


class Introduction extends Component {
	render () {
		console.log('props in Introduction', this.props);

		return (
			<div className="row">
			  <div className="box">
				  <div className="col-md-8 text-center">
				    <h2 className="intro-text text-center">
				    ~ Swing to a German polka
				      Fall in love to an Italian serenade
				      Tap your toes to a Bulgarian beat
				      Be enchanted by a haunting Bosnian ballad ~
				    </h2>
				  </div>
			  </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Introduction);