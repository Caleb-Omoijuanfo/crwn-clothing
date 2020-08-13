import React from 'react';

import './homePage.scss';
import Directory from '../../components/directory/directory';

function HomePage (props) {
  console.log(props);
    return (
        <div className="homepage">
          <Directory />          
        </div>
    )
}

export default HomePage;