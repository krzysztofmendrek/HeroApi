import React, { useState, useEffect } from 'react';
import './SearchView.css';
import { searchHeroesByName } from '../../requests';
import { useParams } from 'react-router';
import HeroSimplified from '../HeroSimplified/HeroSimplified';

function SearchView() {
  const [ searchList,  setSearchListContent ] = useState([]);
  const { name } = useParams();

  useEffect(() => {
    searchHeroesByName(name).then(searchResults => {
      const { data } = searchResults;

      if (data.error) {
        return;
      }

      const { results } = data;
      setSearchListContent(results);
    })
  }, [name]);

  return (
    <section className='searchView'>
      {searchList.map(({ powerstats, image, name }) => <HeroSimplified powerstats={powerstats} imgUrl={image.url} name={name} />)}
    </section>
  )
};

export default SearchView;
