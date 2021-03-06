import React, { useState } from 'react';
import logo from '../../assets/img/nav_logo.png';
import { Link, useHistory, useLocation } from 'react-router-dom';
import './Nav.css';

function Nav() {
  const location = useLocation();
  const history = useHistory();
  const [searchInputValue, setSearchInputValue] = useState('');

  const onEnterPress = event => {
    if (event.key === 'Enter') {
      history.push(`/search/${searchInputValue}`);
      setSearchInputValue('');
    }
  };

  const myFunction = () => {
    setSearchInputValue('');
  };

  return (
    <nav className={`nav ${location.pathname.startsWith('/hero') ? 'nav__dark' : ''}`}>
      <div className='container'>
        <Link to='/'>
          <img className='nav__logo' src={logo} alt='Superhero Database' />
        </Link>
        <form className='nav__search'>
          <input
            autoComplete='off'
            onKeyPress={onEnterPress}
            onChange={event => {
              setSearchInputValue(event.target.value);
            }}
            value={searchInputValue}
            aria-label='enter name of your hero'
            type='text'
            name='search'
          />
          <Link to={`/search/${searchInputValue}`} onClick={myFunction}>
            FIND HERO!
          </Link>
        </form>
      </div>
    </nav>
  );
}

export default Nav;
