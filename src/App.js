import React from 'react';
import { useTheme } from './context/ThemeContext';
import Header from './components/header/Header';
import Education from './components/education/Education';
import Experience from './components/experience/Experience';
import Projects from './components/projects/Projects';
import Skills from './components/skills/Skills';
import Navigation from './components/navigation/Navigation';
import Hobbies from './components/hobbies/Hobbies';
import { resume } from './Object';

const App = () => {
  const { isDark, setIsDark } = useTheme();
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#fffaf7] text-slate-900 dark:bg-slate-950 dark:text-white">
      <div className="pointer-events-none absolute -left-40 top-36 h-96 w-96 rounded-full bg-fuchsia-300/40 blur-3xl dark:bg-fuchsia-700/20" />
      <div className="pointer-events-none absolute -right-32 top-10 h-[32rem] w-[32rem] rounded-full bg-cyan-300/45 blur-3xl dark:bg-cyan-700/20" />
      <div className="pointer-events-none absolute left-1/3 top-[58rem] h-80 w-80 rounded-full bg-orange-300/30 blur-3xl dark:bg-orange-800/15" />
      <Navigation />
      <main className="relative z-10 min-h-screen pb-12 pt-24 md:pt-28">
      <div className="fixed right-5 top-5 z-50 md:right-10 md:top-10">
        <button
          onClick={() => setIsDark(!isDark)}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white/90 text-slate-700 shadow-lg backdrop-blur transition hover:-translate-y-0.5 hover:bg-sky-600 hover:text-white dark:border-slate-700 dark:bg-slate-900/90 dark:text-white"
          aria-label="Toggle theme"
        >
          <span className="text-xl">
            {isDark ? '🌙' : '☀️'}
          </span>
        </button>
      </div>

        <div className="mx-auto max-w-6xl space-y-6 px-4 sm:px-6 lg:px-10">
          <div id="profile" className="portfolio-card hero-card overflow-hidden p-6 sm:p-9">
            <Header name={resume.name} role={resume.role} summary={resume.summary} mark={resume.mark} contact={resume.contact} />
          </div>
          <div className="grid gap-6 lg:grid-cols-12">
            <div id="experience" className="portfolio-card experience-card p-6 sm:p-8 lg:col-span-7"><Experience experience={resume.experience} /></div>
            <div id="education" className="portfolio-card education-card p-6 sm:p-8 lg:col-span-5"><Education education={resume.education} /></div>
            <div id="projects" className="portfolio-card projects-card p-6 sm:p-8 lg:col-span-12"><Projects projects={resume.projects} /></div>
            <div id="skills" className="portfolio-card skills-card p-6 sm:p-8 lg:col-span-7"><Skills skills={resume.skills} languages={resume.languages} /></div>
            <div id="hobbies" className="portfolio-card hobbies-card p-6 sm:p-8 lg:col-span-5"><Hobbies hobbies={resume.hobbies} /></div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
