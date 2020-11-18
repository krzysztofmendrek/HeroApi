import React from 'react';
import { v4 as uuidv4 } from 'uuid';

function Appearance({ appearance }) {
  return (
    <>
      <h2>Appearance:</h2>
      <ul>
        <li>Gender: {appearance.gender}</li>
        <li>Race: {appearance.race}</li>
        <li>Height:</li>
        <ul>
          {appearance.height.map(height => (
            <li key={uuidv4()}>{height}</li>
          ))}
          {appearance.height.length < 1 && <span>No information about height</span>}
        </ul>
        <li>Weight:</li>
        <ul>
          {appearance.weight.map(weight => (
            <li key={uuidv4()}>{weight}</li>
          ))}
          {appearance.weight.length < 1 && <span>No information about weight</span>}
        </ul>
        <li>Eye color: {appearance['eye-color']}</li>
        <li>Hair color: {appearance['hair-color']}</li>
      </ul>
    </>
  );
}

export default Appearance;
