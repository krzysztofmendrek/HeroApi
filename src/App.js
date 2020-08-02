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

function App() {
  return (
    <>
    <Router>
      <Nav />
        <main>
          <div className='container'>
            <Switch>
              <Route exact path='/'>
                <HeroesFeatured />
              </Route>
              <Route path='/search/:name'>
                <SearchView />
              </Route>
              <Route path='/hero/:id'>
              </Route>
            </Switch>
          </div>
        </main>
        <footer>
          <div className="container">
            <p>This content is kindly provided by <a href="https://superheroapi.com/">Superhero API</a></p>
          </div>
      </footer>
    </Router>  
    </>
  );
}

export default App;
