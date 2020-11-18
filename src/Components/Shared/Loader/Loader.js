import React from 'react';
import './Loader.css';

function Loader(isLoading) {
  return (
    <>
      {isLoading && (
        <div className='loading-container loading-container--hero-details'>
          <div className='lds-ripple'>
            <div></div>
            <div></div>
          </div>
        </div>
      )}
      {!isLoading && (
        <div className='loading-container'>
          <div className='lds-ripple'>
            <div></div>
            <div></div>
          </div>
        </div>
      )}
    </>
  );
}

export default Loader;
