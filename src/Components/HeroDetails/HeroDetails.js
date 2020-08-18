import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { getHeroDetailsById } from '../../requests';
import './HeroDetails.css';
import Loader from '../Shared/Loader/Loader';

function HeroDetails() {
  const [searchHeroDetails,  setSearchHeroDetailsContent] = useState();
  const [isLoading,  setLoadingState] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    setLoadingState(true);
    getHeroDetailsById(id).then(heroDetails => {
      const { data } = heroDetails;
      
      if (data.error) {
        return <h1>Provide correct Hero ID</h1>;
      }
      console.log(data);
      const getData = Object.keys(data).map(detail => data[detail]);
      setSearchHeroDetailsContent(getData);
      // console.log(getData);

      // const fullInfo = () => {
      //   for(const info of getData) {
      //     console.log(info);
      //     setSearchHeroDetailsContent(info);
      //   }
      // }
      // fullInfo();
     
      setLoadingState(false);
    })
  }, [id]);
  console.log(searchHeroDetails)
  return (
    <>
    { !isLoading && (
      <section className='hero__details'>
        
        <h1>Hero details:</h1>
        <>
        {searchHeroDetails.map(({url, gender}) => (
          <div>
            <img src={url} alt='Super Hero'></img>
            <h1>{gender}</h1>
          </div>
          
         ))
        }
        </>
      </section> 
    )} {
      isLoading && <Loader />
    }
    </>
  );
}

export default HeroDetails;
