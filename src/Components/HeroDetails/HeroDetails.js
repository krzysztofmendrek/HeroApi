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
      // console.log(heroDetails);
      // console.log(heroDetails.data);
      
      if (data.error) {
        return <h1>Provide correct Hero ID</h1>;
      }
      const fullInfo = Object.keys(data).map(detail => data[detail]);

      // console.log(fullInfo);


      const { biography } = data;
      // console.log(biography)
      // const fullHeroDetails = Object.keys(biography).map(detail => <li key={detail}>{detail.toUpperCase()} : {biography[detail]} </li>);
      // console.log(fullHeroDetails);
      
      setSearchHeroDetailsContent(fullInfo);
      setLoadingState(false);
    })
  }, [id]);
  console.log(searchHeroDetails);
  return (
    <>
    { !isLoading && (
      <section className='hero__details'>
        <h1>Hero details:</h1>
    <ul>{Object.keys(searchHeroDetails).map(info => <li>{searchHeroDetails[info]}</li>)}</ul>
        {/* <ul>{searchHeroDetails.map(info => Object.keys(info).map(detal => console.log(`${info}: ${detal}`)))}</ul> */}
      </section> 
      
    )} {
      isLoading && <Loader />
    }
    </>
  );
}

export default HeroDetails;
