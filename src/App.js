import React from 'react';
import Nav from './Components/Nav/Nav';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import HeroesFeatured from './Components/HeroesFeatured/HeroesFeatured';
import SearchView from './Components/SearchView/SearchView';
import HeroDetails from './Components/HeroDetails/HeroDetails';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <>
    <Router>
      <Nav />
        <main>
          <Switch>
            <Route exact path='/'>
              <HeroesFeatured />
            </Route>
            <Route path='/search/:name?'>
              <SearchView />
            </Route>
            <Route path='/hero/:id'>
              <HeroDetails />
            </Route>
          </Switch>
        </main>
        <Footer />
    </Router>  
    </>
  );
}

export default App;
