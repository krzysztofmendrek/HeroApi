import React, { useEffect, useState } from 'react';
import { getBasicHeroInfoById } from './requests';
import Nav from './Components/Nav/Nav';
import './App.css';

const featuredHeroesIds = [10, 502, 505];

function App() {
  useEffect(() => {
    fetchAndRenderFeaturedHeroes();
  }, []); 

  const [featuredHeroesList, setFeaturedHeroesList] = useState([]);

  const fetchAndRenderFeaturedHeroes = async () => {
    let heroes = [];
    for (const heroId of featuredHeroesIds) {
      const data = await getBasicHeroInfoById(heroId);
      heroes.push(data);
    }
    setFeaturedHeroesList(heroes)
  }

  return (
    <>
      <Nav></Nav>
      <main>
        <section className='featured'>
          {featuredHeroesList.map( ({ name, powerstats, imgUrl}) => (
          <div className='featured__hero'>
            <h2>{name}</h2>
            <img src={imgUrl} alt={`${name}`} />
            <div className='featured__hero__stats'>
              <div>
                <p>{powerstats.combat}</p>
              </div>
            </div>
            <div className='featured__hero__stats'>
              <div>
                <p>{powerstats.durability}</p>
              </div>
            </div>
            <div className='featured__hero__stats'>
              <div>
                <p>{powerstats.itelligence}</p>
              </div>
            </div>
            <div className='featured__hero__stats'>
              <div>
                <p>{powerstats.itelligence}</p>
              </div>
            </div>
            <div className='featured__hero__stats'>
              <div>
                <p>{powerstats.speed}</p>
              </div>
            </div>
            <div className='featured__hero__stats'>
              <div>
                <p>{powerstats.strength}</p>
              </div>
            </div>
          </div>
          ))}
        </section>
      </main>
      <footer></footer>
    </>
  );
}

export default App;
