import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Main from './components/Main';
import WordCount from './components/WordCount';
import Canvas from './canvasComponents/Canvas';
import Pokemon from './pokemonComponents/Pokemon';
import CanvasImage from './canvasComponents/CanvasFallingPixel';


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
        <Route  path = "/sandbox/canvas-mouse"
                element = {<Canvas />}
        />
        <Route  path = "/sandbox/canvas-image"
                element = {<CanvasImage />}
        />
        <Route  path = "/sandbox/pokemon"
                element = {<Pokemon />}
        />
      </Routes>
    </BrowserRouter>

  );
}

export default App;