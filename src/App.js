import React from 'react';
import logo from './logo.svg';
import { Routes, Route, Link } from 'react-router-dom';
import Projects from './Components/Projects';
import Articles from './Components/Articles';
import About from './Components/About';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Projects />} />
        <Route path="articles" element={<Articles />} />
        <Route path="about" element={<About />} />
      </Routes>
      <div className="navigation">
        <img src={logo} className="logo-image" alt="Logo" />
        <div className="navigation-sub">
          {/* Links */}

          <Link to="/" className="item">Projects</Link>
          <Link to="articles" className="item">Articles</Link>
          <Link to="about" className="item">About</Link>
        </div>
      </div>
    </div>
  );
}

export default App;
