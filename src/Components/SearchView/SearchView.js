import React, { useState, useEffect } from 'react';
import './SearchView.css';
import { searchHeroesByName } from '../../requests';
import { useParams } from 'react-router';
import HeroSimplified from '../HeroSimplified/HeroSimplified';
import Loader from '../Shared/Loader/Loader';
import alert from '../../assets/img/error.svg';


function SearchView() {
  const [ searchList,  setSearchListContent ] = useState([]);
  const [ isLoading,  setLoadingState ] = useState(true);
  const [ isError, setErrorState ] = useState(false);
  const { name } = useParams();

  useEffect(() => {
    setLoadingState(true);
    searchHeroesByName(name).then(searchResults => {

      const { data } = searchResults;

      if(data.error) {
        setErrorState(true);
        setLoadingState(false);
        return;
      }

      setErrorState(false);

      const { results } = data;

      setSearchListContent(results);

      setLoadingState(false);
    })
  }, [name]);

  return (
    <>
    { !isLoading && !isError && (
      <section className='searchView'>
        {searchList.map(({ powerstats, image, name, id }) => <HeroSimplified key={id} powerstats={powerstats} imgUrl={image.url} name={name} id={id}/>)}
      </section>)
      } {
      isLoading && <Loader />
      }
      {
      isError && (
        <section>
          <div className='searchView--error'>
            <img src={alert} alt='error alert' />
            <h1>Provide correct hero name</h1>
          </div>
        </section>
      )
      }
    </>
  )
};

export default SearchView;
