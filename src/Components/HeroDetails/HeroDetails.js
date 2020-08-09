import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { getHeroDetailsById } from '../../requests';
import './HeroDetails.css';
import Loader from '../Shared/Loader/Loader';

function HeroDetails() {
  const [searchHeroDetails,  setSearchHeroDetailsContent] = useState([]);
  const [isLoading,  setLoadingState] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    setLoadingState(true);
    getHeroDetailsById(id).then(heroDetails => {
      const { data } = heroDetails;
      
      if (data.error) {
        return;
      }

      const { biography } = data;
      console.log(biography)
      const fullHeroDetails = Object.keys(biography).map(detail => <li key={detail}>{detail.toUpperCase()} : {biography[detail]} </li>);
      console.log(fullHeroDetails);
      
      setSearchHeroDetailsContent(fullHeroDetails);
      setLoadingState(false);
    })
  }, [id]);
  console.log(searchHeroDetails);
  return (
    <>
    { !isLoading && (
      <section className='hero__details'>
        <h1>Hero details:</h1>
        <ul>{searchHeroDetails}</ul>
      </section> 
      
    )} {
      isLoading && <Loader />
    }
    </>
  );
}

export default HeroDetails;
