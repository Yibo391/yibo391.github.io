import React from 'react';
import UKP from '../../imgs/ukp_logo.png';

const Projects = ({ projects }) => {
  return (
    <section>
      <div className="mb-7 flex items-end justify-between gap-4">
        <div><p className="section-kicker">Selected work</p><h2 className="section-title">Projects</h2></div>
        <span className="text-sm font-medium text-violet-600 dark:text-violet-300">Build · Ship · Learn</span>
      </div>
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project, index) => (
          <div key={index} className={`group flex flex-col justify-between rounded-2xl border p-6 transition duration-300 hover:-translate-y-1 hover:shadow-xl ${index === 0 ? 'border-fuchsia-200 bg-gradient-to-br from-fuchsia-50 via-violet-50 to-sky-50 dark:border-fuchsia-900/70 dark:from-fuchsia-950/30 dark:via-violet-950/30 dark:to-sky-950/30' : 'border-slate-100 bg-white/60 dark:border-slate-700 dark:bg-slate-800/50'}`}>
            <div className="flex justify-between items-start gap-4">
              <div className="flex-grow">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl bg-white/80 dark:bg-slate-700 p-2 rounded-lg">{project.icon}</span>
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{project.title}</h3>
                </div>
                <ul className="space-y-2">
                  {project.details.map((detail, idx) => (
                    <li key={idx} className="text-gray-600 dark:text-gray-300 flex items-start gap-2">
                      <span className="text-blue-500 mt-1">•</span>
                      {detail}
                    </li>
                  ))}
                </ul>
                {project.link && (
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center mt-5 text-sm font-extrabold text-slate-800 underline decoration-2 decoration-fuchsia-400 underline-offset-4 transition hover:text-fuchsia-700 dark:text-white dark:hover:text-fuchsia-300"
                  >
                    <span>Visit Project</span>
                    <span className="ml-1">→</span>
                  </a>
                )}
              </div>
              {index === 0 && (
                <div className="flex-shrink-0 bg-white dark:bg-gray-600 p-3 rounded-xl hover:bg-blue-50 dark:hover:bg-gray-500 transition-colors">
                  <img 
                    src={UKP}   
                    alt="UKP Lab"
                    className="w-16 h-16 object-contain hover:scale-110 transition-transform"
                  />
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
