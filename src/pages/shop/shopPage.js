import React from 'react';

import './shopPage.scss';
import SHOP_DATA from './shopData';
import PreviewCollection from '../../components/preview-collection/previewcollection';

class ShopPage extends React.Component {
  state = {
    collections: SHOP_DATA
  }

  render () {
    const { collections } = this.state;
    return (
      <div>
        {
          collections.map(collection => (
            <PreviewCollection 
              items={collection.items}
              key={collection.id}
              title={collection.title}
            />
          ))
        }        
      </div>
    )
  }
}

export default ShopPage;