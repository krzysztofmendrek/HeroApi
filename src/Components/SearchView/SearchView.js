import React, { useState, useEffect } from 'react';
import './SearchView.css';
import { searchHeroesByName } from '../../requests';
import { useParams } from 'react-router';
import HeroSimplified from '../HeroSimplified/HeroSimplified';
import Loader from '../Shared/Loader/Loader';

function SearchView() {
  const [searchList,  setSearchListContent] = useState([]);
  const [isLoading,  setLoadingState] = useState(true);
  const { name } = useParams();

  useEffect(() => {
    setLoadingState(true);
    searchHeroesByName(name).then(searchResults => {

      const { data } = searchResults;
      console.log(searchResults)
      console.log(data)
      if (data.error) {
        return;
      }

      const { results } = data;
      console.log(results)
      setSearchListContent(results);
      setLoadingState(false);
    })
  }, [name]);

  return (
    <>
    { !isLoading && (
      <section className='searchView'>
        {searchList.map(({ powerstats, image, name, id }) => <HeroSimplified key={id} powerstats={powerstats} imgUrl={image.url} name={name} id={id}/>)}
      </section>)
      } {
      isLoading && <Loader />
      }
    </>
  )
};

export default SearchView;
