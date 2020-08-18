import React from 'react';
import './Powerstats.css';

function Powerstats({ powerstats }) {
  return(
    <>
      <h2>Powerstats:</h2>
        <ul>
          {Object.keys(powerstats).map(stat =>
            <li>{stat}: {powerstats[stat]} </li>
            )}
        </ul>
    </>
  )
}

export default Powerstats;
