import React from 'react';
import Nav from './Components/Nav/Nav';
import './App.css';
import HeroesFeatured from './Components/HeroesFeatured/HeroesFeatured';

function App() {
  return (
    <>
      <Nav></Nav>
      <main>
        <div className='container'>
          <HeroesFeatured />
        </div>
      </main>
      <footer></footer>
    </>
  );
}

export default App;
