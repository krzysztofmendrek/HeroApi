import React from 'react';
import { v4 as uuidv4 } from 'uuid';

function Powerstats({ powerstats }) {
  return(
    <>
      <h2>Powerstats:</h2>
        <ul>
          {Object.keys(powerstats).map(stat =>
            <li key={uuidv4()}>{stat}: {powerstats[stat]} </li>
            )}
        </ul>
    </>
  )
}

export default Powerstats;
