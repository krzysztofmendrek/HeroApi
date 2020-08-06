  
import React from 'react';
import './Loader.css';

function Loader() {
  return (
  <>
    <container className='loading-container'>
      <div className="lds-ripple"><div></div><div></div></div>
    </container>
  </>
  )  
}

export default Loader;
