import React, { useRef, useEffect } from 'react';
import Header from './components/header/Header';
import Education from './components/education/Education';
import Experience from './components/experience/Experience';
import Projects from './components/projects/Projects';
import Skills from './components/skills/Skills';
import Navigation from './components/navigation/Navigation';
import { resume } from './Object';

const App = () => {
  const sectionRefs = {
    profile: useRef(null),
    education: useRef(null),
    experience: useRef(null),
    projects: useRef(null),
    skills: useRef(null)
  };

  const scrollToSection = (sectionId) => {
    sectionRefs[sectionId].current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="flex">
      <Navigation activeSection="" setActiveSection={scrollToSection} />
      <main className="ml-20 flex-1 p-8">
        <div className="container mx-auto max-w-4xl space-y-12">
          <div ref={sectionRefs.profile}>
            <Header name={resume.name} contact={resume.contact} />
          </div>
          <div ref={sectionRefs.education}>
            <Education education={resume.education} />
          </div>
          <div ref={sectionRefs.experience}>
            <Experience experience={resume.experience} />
          </div>
          <div ref={sectionRefs.projects}>
            <Projects projects={resume.projects} />
          </div>
          <div ref={sectionRefs.skills}>
            <Skills skills={resume.skills} languages={resume.languages} />
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
