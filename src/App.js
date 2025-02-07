import React from 'react';
import Header from './components/header/Header';
import Education from './components/education/Education';
import Experience from './components/experience/Experience';
import Projects from './components/projects/Projects';
import Skills from './components/skills/Skills';
import { resume } from './Object';

const App = () => {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <Header name={resume.name} contact={resume.contact} />
      <Education education={resume.education} />
      <Experience experience={resume.experience} />
      <Projects projects={resume.projects} />
      <Skills skills={resume.skills} languages={resume.languages} />
    </div>
  );
};

export default App;
