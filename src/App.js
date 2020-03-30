import React from 'react';
import Game from './components/Game';
import './App.css';
import { scoreProvider } from './utils/Provider';

function App() {
  return (
    <scoreProvider>
      <Game />
    </scoreProvider>
  );
}

export default App;
