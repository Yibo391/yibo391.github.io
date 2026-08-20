import React from 'react';

const Header = ({ name, role, summary, mark, contact }) => {
  return (
    <header className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
      <div className="max-w-2xl">
        <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-sky-600 dark:text-sky-300">Portfolio</p>
        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white">{name}</h1>
        <p className="mt-2 text-xl font-medium text-slate-700 dark:text-slate-200">{role}</p>
        <p className="mt-4 text-base leading-7 text-gray-600 dark:text-gray-300">{summary}</p>
        <div className="mt-5 flex flex-wrap gap-3 text-sm">
          <span className="rounded-full bg-slate-100 px-3 py-2 text-slate-700 dark:bg-slate-700 dark:text-slate-200">📍 {contact.location}</span>
          <a className="rounded-full bg-slate-100 px-3 py-2 text-slate-700 transition hover:bg-sky-100 dark:bg-slate-700 dark:text-slate-200" href={`mailto:${contact.email}`}>Email</a>
          <a className="rounded-full bg-slate-100 px-3 py-2 text-slate-700 transition hover:bg-sky-100 dark:bg-slate-700 dark:text-slate-200" href={contact.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a>
          <a className="rounded-full bg-slate-100 px-3 py-2 text-slate-700 transition hover:bg-sky-100 dark:bg-slate-700 dark:text-slate-200" href={contact.github} target="_blank" rel="noreferrer">GitHub ↗</a>
        </div>
      </div>
      <img src={mark} alt="YW personal mark" className="h-24 w-24 rounded-3xl shadow-lg md:h-32 md:w-32" />
    </header>
  );
};

export default Header;
