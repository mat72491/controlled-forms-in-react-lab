import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

// src/App.jsx
import './App.css';
import Bookshelf from './components/Bookshelf.jsx';

const App = () => {
  return (
    <>
      <h1>My Bookshelf</h1>
      <Bookshelf />
    </>
  );
};

export default App;
