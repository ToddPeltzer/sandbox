import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Main from './Main';
import WordCount from './components/WordCount';
import Canvas from './canvasComponents/Canvas';
import Pokemon from './pokemonComponents/Pokemon';


function App() {
  return (
    
    <BrowserRouter>
      <Header />
      <Routes>
        <Route  path = "/sandbox"
                element = {<Main />}
        />
        <Route  path = "/sandbox/word-count"
                element = {<WordCount />}
        />
        <Route  path = "/sandbox/canvas"
                element = {<Canvas />}
        />
        <Route  path = "/sandbox/pokemon"
                element = {<Pokemon />}
        />
      </Routes>
    </BrowserRouter>

  );
}

export default App;