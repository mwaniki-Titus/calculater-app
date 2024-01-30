
// src/App.js
import React from 'react';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import Body from './components/Body';
import './App.scss';

function App() {
  return (
    <div className="main">
    <div className="app">
      <Sidebar />
      <div className="content">
        <Navbar />
        <Body />
      </div>
    </div>
    </div>
  );
}

export default App;
