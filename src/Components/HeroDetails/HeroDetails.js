import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { getHeroDetailsById } from '../../requests';
import './HeroDetails.css';
import Loader from '../Shared/Loader/Loader';
import Biography from './Biography/Biography';
import Appearance from './Appearance/Appearance';

function HeroDetails() {
  const [heroDetails,  setHeroDetails] = useState();
  const [isLoading,  setLoadingState] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    setLoadingState(true);
    getHeroDetailsById(id).then(resp => {
      const { data: heroDetails } = resp;
      console.log(heroDetails);

      setHeroDetails(heroDetails);
      setLoadingState(false);
    })
  }, [id]);


  return (
    <>
    { !isLoading && (
      <section>
        
        <h1>Hero details:</h1>
        <div className='hero__details'>
          <h2>Name: {heroDetails.name}</h2>
          <img src={heroDetails.image.url} alt={heroDetails.name}></img>
          <h2>Powerstats:</h2>
          <li>Intelligence: {heroDetails.powerstats.intelligence}</li>
          <li>Strength: {heroDetails.powerstats.strength}</li>
          <li>Speed: {heroDetails.powerstats.speed}</li>
          <li>Durability: {heroDetails.powerstats.durability}</li>
          <li>Power: {heroDetails.powerstats.power}</li>
          <li>Combat: {heroDetails.powerstats.combat}</li>
          {/* {Object.keys(heroDetails.powerstats).map(stat =>
            <li>{stat}: {heroDetails.powerstats.stat} </li>
            )} */}
          {<Biography biography={heroDetails.biography} />}
          {<Appearance appearance={heroDetails.appearance} />}
          <h2>Work:</h2>
          <li>Occupation: {heroDetails.work.occupation}</li>
          <li>Base: {heroDetails.work.base}</li>
          <h2>Connections:</h2>
          <li>Group-affiliation: {heroDetails.connections['group-affilation']}</li>
          <li>Relatives: {heroDetails.connections.relatives}</li>
        </div>
      </section> 
    )} {
      isLoading && <Loader />
    }
    </>
  );
}

export default HeroDetails;
