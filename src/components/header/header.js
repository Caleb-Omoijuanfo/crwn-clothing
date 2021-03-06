import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from '../../assets/crown.svg';

import './header.scss';
import { auth } from '../../firebase/utilities';



function Header(props) {
  const handleSignOut = () => {
    return auth.signOut();
  }

  return (
    <div className="header">
      <Link 
        className="logo-container"
        to="/"
      >
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link className="option" to="/shop"> SHOP </Link>
        <Link className="option" to="/contact"> CONTACT </Link>
        {
          props.currentUser ? <div className="option" onClick={handleSignOut}>SIGN OUT</div> 
            : <Link className="option" to="/signIn"> SIGNIN </Link>
        }        
      </div>
    </div>
  )
}

export default Header;