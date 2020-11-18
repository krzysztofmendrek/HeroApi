import React, { useState } from 'react';
import * as icon from '../../assets/icons';
import './HeroSimplified.css';
import { Link } from 'react-router-dom';

function HeroSimplified({ name, imgUrl, powerstats, id }) {
  const [displayedUrl, setDisplayedUrl] = useState(imgUrl);

  const loadAlternativeImage = () => {
    setDisplayedUrl('https://via.placeholder.com/377');
  };

  return (
    <div className='featured__hero'>
      <h2>{name}</h2>
      <Link to={`/hero/${id}`}>
        <img
          className='featured__hero__img'
          onError={loadAlternativeImage}
          src={displayedUrl}
          alt={`${name}`}
        />
      </Link>
      <div className='featured__hero__stats'>
        <div>
          <img className='featured__hero__stats__icon' src={icon.boxingIcon} alt='combat icon' />
          <p>{powerstats.combat === 'null' ? 'N/A' : powerstats.combat}</p>
        </div>
        <div>
          <img
            className='featured__hero__stats__icon'
            src={icon.durableIcon}
            alt='durability icon'
          />
          <p>{powerstats.durability === 'null' ? 'N/A' : powerstats.durability}</p>
        </div>
        <div>
          <img
            className='featured__hero__stats__icon'
            src={icon.thinkingIcon}
            alt='intelligence icon'
          />
          <p>{powerstats.intelligence === 'null' ? 'N/A' : powerstats.intelligence}</p>
        </div>
        <div>
          <img
            className='featured__hero__stats__icon'
            src={icon.speedometerIcon}
            alt='speed icon'
          />
          <p>{powerstats.speed === 'null' ? 'N/A' : powerstats.speed}</p>
        </div>
        <div>
          <img className='featured__hero__stats__icon' src={icon.fistIcon} alt='strength icon' />
          <p>{powerstats.strength === 'null' ? 'N/A' : powerstats.strength}</p>
        </div>
      </div>
    </div>
  );
}

export default HeroSimplified;
