import React from 'react';
import * as icon from '../../assets/icons'
import './HeroSimplified.css';

function HeroSimplified({ name, imgUrl, powerstats }) {
  return (
  <div className='featured__hero'>
    <h2>{name}</h2>
    <img src={imgUrl} alt={`${name}`} />
    <div className='featured__hero__stats'>
      <div>
        <img className='featured__hero__stats__icon' src={icon.boxingIcon} alt='combat icon' />
        <p>{powerstats.combat}</p>
      </div>
      <div>
        <img className='featured__hero__stats__icon' src={icon.durableIcon} alt='durability icon' />
        <p>{powerstats.durability}</p>
      </div>
      <div>
        <img className='featured__hero__stats__icon' src={icon.thinkingIcon} alt='intelligence icon' />
        <p>{powerstats.intelligence}</p>
      </div>
      <div>
        <img className='featured__hero__stats__icon' src={icon.speedometerIcon} alt='speed icon' />
        <p>{powerstats.speed}</p>
      </div>
      <div>
        <img className='featured__hero__stats__icon' src={icon.fistIcon} alt='strength icon' />
        <p>{powerstats.strength}</p>
      </div>
    </div>
  </div>
  );
}

export default HeroSimplified;
