import React, {Component} from 'react';
// import {connect} from 'react-redux';


const Paragraph = ({clickFunction, paragraph}) => {
  return (
    <p onClick={ () => clickFunction()}>
      {paragraph.text}
    </p>
  )
}

export default Paragraph;

// class Paragraph extends Component {

// 	// onParagraphClick () {

// 	// }

// 	render() {
// 		return (
// 			<p onClick={ () => this.props.clickFunction() }>
// 			  {this.props.paragraph.text}
// 			</p>
// 		)
// 	}
// }



// const mapStateToProps = (state) => {
//   return state;
// }

// const mapDispatchToProps = (dispatch) => {
// 	return {};
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Paragraph);