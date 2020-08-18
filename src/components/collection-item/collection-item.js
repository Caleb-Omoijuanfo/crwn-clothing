import React from 'react';

import './collection-item.scss';

function CollectionItem(props) {
  return (
    <div className="collection-item">
      <div
        className='image'
        style={{
          backgroundImage: `url(${props.imageurl})`
        }}
      />
      <div className="collection-footer">
        <span className="name">{props.name}</span>
        <span className="price">&#8358;{props.price}</span>
      </div>
    </div>
  )
}

export default CollectionItem;