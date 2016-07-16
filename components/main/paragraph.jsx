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
