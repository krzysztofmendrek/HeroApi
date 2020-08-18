import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { getHeroDetailsById } from '../../requests';
import './HeroDetails.css';
import Loader from '../Shared/Loader/Loader';
import Biography from './Biography/Biography';
import Appearance from './Appearance/Appearance';
import Powerstats from './Powerstats/Powerstats';
import Work from './Work/Work';
import Connections from './Connections/Connections';
import alert from '../../assets/img/error.svg';

function HeroDetails() {
  const [ heroDetails,  setHeroDetails ] = useState();
  const [ isLoading,  setLoadingState ] = useState(true);
  const [ isError, setErrorState ] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setLoadingState(true);
    getHeroDetailsById(id).then(resp => {
      const { data: heroDetails } = resp;

      if(heroDetails.error) {
        setErrorState(true);
        setLoadingState(false);
        return;
      }

      setErrorState(false);

      setHeroDetails(heroDetails);

      setLoadingState(false);
    })
  }, [id]);


  return (
    <>
    { !isLoading && !isError && (
      <section>
        <h1>Hero details:</h1>
        <div className='hero__details'>
          <ul>
            <h2>Name: {heroDetails.name}</h2>
            <img src={heroDetails.image.url} alt={heroDetails.name} />
            <Powerstats powerstats={heroDetails.powerstats} />
            <Biography biography={heroDetails.biography} />
            <Appearance appearance={heroDetails.appearance} />
            <Work work={heroDetails.work} />
            <Connections connections={heroDetails.connections} />
          </ul>
        </div>
      </section> 
    )} {
      isLoading && <Loader />
    }
    {
      isError && (
        <section>
          <div className='hero__details--error'>
            <img src={alert} alt='error alert' />
          </div>
        </section>
      )
    }
    </>
  );
}

export default HeroDetails;
