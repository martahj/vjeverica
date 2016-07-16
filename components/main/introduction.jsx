import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import changeIntro from '../../actions/changeIntro.js'
import Paragraph from './paragraph.jsx';


class Introduction extends Component {
	render () {
		let paragraphClick = this.props.paragraphClick;
		console.log('paragraph click in intro', paragraphClick);
		console.log('paragraphs in intro', this.props.paragraphs);

		// console.log('props in Introduction', this.props);
		let paragraphs = this.props.paragraphs.map( paragraph => 
			               <Paragraph key={paragraph.id}
			                          paragraph={paragraph}
			                          clickFunction={ () => this.props.paragraphClick(paragraph.id) }
			               />
			             )

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
				    {paragraphs}
				  </div>
			  </div>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	console.log('state in introduction mapping to props', state);
  return {
  	paragraphClick: state.paragraphClick,
  	paragraphs: state.intro.text
  }
}

const mapDispatchToProps = (dispatch) => {
	return {
		paragraphClick: (id) => {
			// dispatch_changeIntro(id, 'this is the new text');
			// console.log('registered click on paragraph', id);
			dispatch(changeIntro(id, 'this is the new text'))
		}
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Introduction);