import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Main from './components/Main';
import WordCount from './components/WordCount';
import BrickSpotlight from './components/BrickSpotlight';
import Pokemon from './pokemonComponents/Pokemon';

function App() {
  return (
    
    <BrowserRouter>
      <Header />
      <Routes>
        <Route  path = "/sandbox"
                element = {<Main />}
        />
        <Route  path = "/word-count"
                element = {<WordCount />}
        />
        <Route  path = "/brick-spotlight"
                element = {<BrickSpotlight />}
        />
        <Route  path = "/pokemon"
                element = {<Pokemon />}
        />
      </Routes>
    </BrowserRouter>

  );
}

export default App;