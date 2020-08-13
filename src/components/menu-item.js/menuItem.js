import React from 'react';
import { withRouter } from 'react-router-dom';

import './menuItem.scss';

function MenuItem (props) {
  const handleClick = () => {
   return props.history.push(`${props.match.url}${props.linkUrl}`);
  }

  return (
    <div className={`${props.size} menu-item`} onClick={handleClick}  >
      <div 
        className="background-image"
        style={{backgroundImage: `url(${props.imageUrl})`}}
      />
      <div className="content">
        <h1 className="title">{props.title.toUpperCase()}</h1>
        <span className="subtitle">Shop Now!!</span>
      </div>
    </div>
  )
}

export default withRouter(MenuItem);