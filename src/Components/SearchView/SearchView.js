import React, { useState, useEffect } from 'react';
import './SearchView.css';
import { searchHeroesByName } from '../../requests';
import { useParams } from 'react-router';
import HeroSimplified from '../HeroSimplified/HeroSimplified';
import Loader from '../Loader/Loader';

function SearchView() {
  const [ searchList,  setSearchListContent ] = useState([]);
  const [ isLoading,  setLoadingState ] = useState(true);
  const { name } = useParams();

  useEffect(() => {
    setLoadingState(true);
    searchHeroesByName(name).then(searchResults => {
      const { data } = searchResults;

      if (data.error) {
        return;
      }

      const { results } = data;
      setSearchListContent(results);
      setLoadingState(false);
    })
  }, [name]);

  return (
    <>
    { !isLoading && (
      <section className='searchView'>
        {searchList.map(({ powerstats, image, name }) => <HeroSimplified powerstats={powerstats} imgUrl={image.url} name={name} />)}
      </section>)
      } {
      isLoading && <Loader />
      }
    </>
  )
};

export default SearchView;
