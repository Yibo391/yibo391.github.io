import React from 'react';
import UKP from '../../imgs/ukp_logo.png';

const Projects = ({ projects }) => {
  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">Projects</h2>
      <div className="space-y-6">
        {projects.map((project, index) => (
          <div key={index} className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6 hover:shadow-md transition-all">
            <div className="flex justify-between items-start gap-4">
              <div className="flex-grow">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl bg-white dark:bg-gray-600 p-2 rounded-lg">{project.icon}</span>
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
                    className="inline-flex items-center mt-4 text-blue-500 hover:text-blue-700 text-sm font-medium hover:underline px-4 py-2 bg-blue-50 dark:bg-blue-900/30 rounded-full transition-colors"
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
