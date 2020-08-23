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
  const [ displayedUrl, setDisplayedUrl ] = useState();

  const loadAlternativeImage = () => {
    setDisplayedUrl('https://via.placeholder.com/480')
  }

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
      setDisplayedUrl(heroDetails.image.url);

      setLoadingState(false);
    })
  }, [id]);

 

  return (
    <>
    { !isLoading && !isError && (
      <section className='hero__details__section'>
        <div className='container'>
          <div className='hero__details__image'>
            <h1>{heroDetails.name}</h1>
            <img src={displayedUrl}
            onError={loadAlternativeImage}
            alt={heroDetails.name} />
          </div>
          <div className='hero__details__stats'>
            <h1>Hero details:</h1>
            <div className='hero__details__stats__wrapper'>
              <div className='first__column'>
              <div>
                <Powerstats powerstats={heroDetails.powerstats} />
              </div>
              <div>
                <Appearance appearance={heroDetails.appearance} />
              </div>
              <div>
                <Connections connections={heroDetails.connections} /> 
              </div>
              </div>
              <div className='second__column'>
              <div>
                <Biography biography={heroDetails.biography} />
              </div>
              <div>
                <Work work={heroDetails.work} />
              </div>
              </div>
            </div>
          </div>
        </div>
      </section> 
    )} {
      isError && !isLoading && (
        <section>
          <div className='hero__details__error'>
            <img src={alert} alt='error alert' />
          </div>
        </section>
      )
    }
    {
      isLoading && <Loader />
    }
    </>
  );
}

export default HeroDetails;
