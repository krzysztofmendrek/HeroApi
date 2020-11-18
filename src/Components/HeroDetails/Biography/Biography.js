import React from 'react';
import { v4 as uuidv4 } from 'uuid';

function Biography({ biography }) {
  return (
    <>
      <h2>Full biography:</h2>
      <ul>
        <li>Full name: {biography['full-name']}</li>
        <li>Alter egos: {biography['alter-egos']}</li>
        <li>Alias:</li>
        <ul>
          {biography.aliases.map(alias => (
            <li key={uuidv4()}>{alias}</li>
          ))}
          {biography.aliases.length < 1 && <span>No aliases</span>}
        </ul>
        <li>Place of birth: {biography['place-of-birth']}</li>
        <li>First appearance: {biography['first-appearance']}</li>
        <li>Publisher: {biography.publisher}</li>
        <li>Alignment: {biography.alignment}</li>
      </ul>
    </>
  );
}

export default Biography;
