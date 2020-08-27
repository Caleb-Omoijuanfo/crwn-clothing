import React from 'react';

import './custom-button.scss';

function CustomButton(props) {
  return (
    <button 
      className="custom-button"
      type={props.type}
    >
      {props.buttonName}
    </button>
  )
};

export default CustomButton;

