import React from 'react';
import './Appearance.css';

function Appearance({ appearance }) {
  return(
    <>
    <h2>Appearance:</h2>
    <li>Gender: {appearance.gender}</li>
    <li>Race: {appearance.race}</li>
    <li>Height:</li>
    <ul>
      {appearance.height.map(height => 
        <li>-{height}</li>
        )}
      {appearance.height.length < 1 && <span>No information about height</span>}
    </ul>
    <li>Weight:</li>
    <ul>
      {appearance.weight.map(weight => 
        <li>-{weight}</li>
        )}
      {appearance.weight.length < 1 && <span>No information about weight</span>}
    </ul>
    <li>Eye color: {appearance['eye-color']}</li>
    <li>Hair color: {appearance['hair-color']}</li>
    </>
  )
}

export default Appearance;
