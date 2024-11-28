// src/App.js
import React from 'react';
import Header from './components/Header';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      
      <section id="summary">
        <h2>Summary</h2>
        <p>Master's student in Computer Science at Technische Universität Darmstadt. Experienced in developing web applications. Possesses a strong foundation in machine learning and deep learning. Dedicated to continuous learning and contributing effectively to software development teams.</p>
      </section>
      
      <Education />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
      
      <footer>
        <p>&copy; 2024 Yibo Wang. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
