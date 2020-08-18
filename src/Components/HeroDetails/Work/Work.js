import React from 'react';
import './Work.css';

function Work({ work }) {
  return(
    <>
      <h2>Work:</h2>
      <ul>
        <li>Occupation: {work.occupation}</li>
        <li>Base: {work.base}</li>
      </ul>
    </>
  )
}

export default Work;
