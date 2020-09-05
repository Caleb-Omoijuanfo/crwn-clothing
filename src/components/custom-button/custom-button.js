import React from 'react';

import './custom-button.scss';

function CustomButton(props) {
  return (
    <button 
      className={`${props.isGoogleSignIn ? 'google-sign-in' : ''} custom-button`}
      type={props.type}
      onClick={props.handleClick}
    >
      {props.buttonName}
    </button>
  )
};

export default CustomButton;

