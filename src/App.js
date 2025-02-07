import React, { useRef, useEffect } from 'react';
import { useTheme } from './context/ThemeContext';
import Header from './components/header/Header';
import Education from './components/education/Education';
import Experience from './components/experience/Experience';
import Projects from './components/projects/Projects';
import Skills from './components/skills/Skills';
import Navigation from './components/navigation/Navigation';
import { resume } from './Object';

const App = () => {
  const { isDark } = useTheme();
  const sectionRefs = {
    profile: useRef(null),
    education: useRef(null),
    experience: useRef(null),
    projects: useRef(null),   // Add missing ref
    skills: useRef(null)      // Add missing ref
  };

  const scrollToSection = (sectionId) => {
    try {
      if (sectionRefs[sectionId]?.current) {
        sectionRefs[sectionId].current.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }
    } catch (error) {
      console.error('Error scrolling to section:', sectionId, error);
    }
  };

  return (
    <div className="flex bg-slate-50 dark:bg-gray-900 min-h-screen">
      <Navigation activeSection="" setActiveSection={scrollToSection} />
      <main className="ml-20 flex-1 p-8 md:p-12">
        <div className="container mx-auto max-w-4xl space-y-16">
          <div ref={sectionRefs.profile} className="bg-white dark:bg-gray-800 dark:text-white rounded-xl shadow-sm p-8">
            <Header name={resume.name} contact={resume.contact} />
          </div>
          <div ref={sectionRefs.education} className="bg-white dark:bg-gray-800 dark:text-white rounded-xl shadow-sm p-8">
            <Education education={resume.education} />
          </div>
          <div ref={sectionRefs.experience} className="bg-white dark:bg-gray-800 dark:text-white rounded-xl shadow-sm p-8">
            <Experience experience={resume.experience} />
          </div>
          <div ref={sectionRefs.projects} className="bg-white dark:bg-gray-800 dark:text-white rounded-xl shadow-sm p-8">
            <Projects projects={resume.projects} />
          </div>
          <div ref={sectionRefs.skills} className="bg-white dark:bg-gray-800 dark:text-white rounded-xl shadow-sm p-8">
            <Skills skills={resume.skills} languages={resume.languages} />
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
