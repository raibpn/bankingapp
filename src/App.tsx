import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <Route path='/' element={<Home />} />
    </div>
  );
}

export default App;
