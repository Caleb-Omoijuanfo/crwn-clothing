import React from 'react';

import './previewcollection.scss';

import CollectionItem from '../collection-item/collection-item';

function PreviewCollection(props) {
  return (
    <div className="collection-preview">
      <h1 className="title">{props.title.toUpperCase()}</h1>
      <div className="preview">
        {
          props.items
            .filter((item, index) => index < 4)
            .map(item => (
              <CollectionItem
                key={item.id}
                imageurl={item.imageUrl}
                name={item.name}
                price={item.price}
              />
          ))
        }
      </div>
    </div>
    )
}

export default PreviewCollection;