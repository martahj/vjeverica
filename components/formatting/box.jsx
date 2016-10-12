import React from 'react';

const Box = props => (
  <div className="row">
      <div className="box">
      {props.children}
      </div>
    </div>
);

export default Box;
