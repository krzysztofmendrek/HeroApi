import React from 'react';
import './Biography.css';

function Biography({ biography }) {
  return(
    <>
    <h2>Full biography:</h2>
    <li>Full-name: {biography['full-name']}</li>
    <li>Alter-egos: {biography['alter-egos']}</li>
    <li>Alias:</li>
    <ul>
      {biography.aliases.map(alias => 
        <li>-{alias}</li>
        )}
      {biography.aliases.length < 1 && <span>No aliases</span>}
    </ul>
    <li>Place of birth: {biography['place-of-birth']}</li>
    <li>First appearance: {biography['first-appearance']}</li>
    <li>Publisher: {biography.publisher}</li>
    <li>Alignment: {biography.alignment}</li>
    </>
  )
}

export default Biography;
