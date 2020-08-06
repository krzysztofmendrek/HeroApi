import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { getHeroDetailsById } from '../../requests';
import './HeroDetails.css';
import Loader from '../Shared/Loader/Loader';

function HeroDetails() {
  const [searchListDetails,  setSearchListDetailsContent] = useState([]);
  // const [isLoading,  setLoadingState] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    // setLoadingState(true);
    getHeroDetailsById(id).then(searchDetails => {
      const { data } = searchDetails;
      
      if (data.error) {
        return;
      }

      const { biography } = data;
     
      setSearchListDetailsContent(biography);
      // setLoadingState(false);
    })
  }, [id]);

  return (
   
      <section>
        {searchListDetails.map(({biography})=> <HeroDetails />)}
      </section> 

  );
}

export default HeroDetails;
