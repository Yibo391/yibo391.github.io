import React from 'react';

const Experience = ({ experience }) => {
  return (
    <section>
      <div className="mb-7 flex items-end justify-between gap-4">
        <div>
          <p className="section-kicker">Career</p>
          <h2 className="section-title">Experience</h2>
        </div>
        <span className="hidden text-sm text-slate-500 sm:block dark:text-slate-400">Research · AI · Software</span>
      </div>
      <div className="relative space-y-5 before:absolute before:bottom-7 before:left-7 before:top-7 before:w-px before:bg-sky-100 dark:before:bg-slate-700">
        {experience.map((exp, index) => (
          <article key={index} className="relative grid gap-4 rounded-2xl border border-slate-100 bg-slate-50/70 p-5 transition duration-300 hover:-translate-y-0.5 hover:border-sky-200 hover:bg-white hover:shadow-lg dark:border-slate-700 dark:bg-slate-800/60 dark:hover:border-sky-800 dark:hover:bg-slate-800 sm:grid-cols-[56px_1fr] sm:p-6">
            <div className={`relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl text-xl font-extrabold shadow-sm ${exp.logoStyle}`} aria-label={`${exp.company} logo`}>
              {exp.logo}
            </div>
            <div>
              <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">{exp.title}</h3>
                  <p className="font-semibold text-sky-700 dark:text-sky-300">{exp.company}</p>
                </div>
                <p className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-slate-500 shadow-sm dark:bg-slate-700 dark:text-slate-300">{exp.period}</p>
              </div>
              <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">{exp.location}</p>
              <ul className="mt-4 space-y-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
                {exp.details.map((detail, idx) => (
                  <li key={idx} className="flex gap-2"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-500" />{detail}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Experience;
