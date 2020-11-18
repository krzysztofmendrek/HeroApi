import React from 'react';
import { useLocation } from 'react-router-dom';
import './Footer.css';

function Footer() {
  const location = useLocation();

  return (
    <footer className={`footer ${location.pathname.startsWith('/hero') ? 'footer__dark' : ''}`}>
      <div className='container'>
        <p>
          This content is kindly provided by
          <a href='https://superheroapi.com/'> Superhero API</a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
