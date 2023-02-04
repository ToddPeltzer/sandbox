import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Main from './components/Main';
import WordCount from './components/WordCount';
import Canvas from './components/Canvas';
import Pokemon from './components/Pokemon';


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
        <Route  path = "/canvas"
                element = {<Canvas />}
        />
        <Route  path = "/pokemon"
                element = {<Pokemon />}
        />
      </Routes>
    </BrowserRouter>

  );
}

export default App;