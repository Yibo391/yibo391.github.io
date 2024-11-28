// src/components/Header.js
import React from 'react';
import Typewriter from './Typewriter';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="title-container">
        <Typewriter text="Yibo Wang" speed={150} />
        <div className="subtitle">
          <Typewriter 
            text="Full Stack Developer & Machine Learning" 
            speed={50} 
          />
        </div>
      </div>
      <nav className="nav">
        {['summary', 'education', 'experience', 'projects', 'skills', 'contact'].map((item) => (
          <a 
            href={`#${item}`}
            key={item}
            className="nav-item"
          >
            {item.charAt(0).toUpperCase() + item.slice(1)}
          </a>
        ))}
      </nav>
    </header>
  );
}

export default Header;
