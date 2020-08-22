import React from 'react';

function Connections({ connections }) {
  return(
    <>
      <h2>Connections:</h2>
      <ul>
        <li>Group-affiliation: {connections['group-affilation']}</li>
        <li>Relatives: {connections.relatives}</li>
      </ul>
    </>
  )
}

export default Connections;
