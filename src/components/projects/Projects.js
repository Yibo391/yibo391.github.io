import React from 'react';
import UKP from '../../imgs/ukp_logo.png'

const Projects = ({ projects }) => {
  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Projects</h2>
      {projects.map((project, index) => (
        <div key={index} className="mb-6 flex justify-between items-start gap-4">
          <div className="flex-grow border-l-4 border-gray-200 pl-4">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-semibold text-lg flex items-center gap-2">
                <span className="text-xl">{project.icon}</span>
                <span>{project.title}</span>
              </h3>
              {project.link && (
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-500 hover:text-blue-700 text-sm font-medium hover:underline px-3 py-1 bg-blue-50 rounded-full"
                >
                  <span>Visit Project</span>
                  <span className="ml-1">→</span>
                </a>
              )}
            </div>
            <ul className="list-disc list-inside mt-2 text-gray-600">
              {project.details.map((detail, idx) => (
                <li key={idx}>{detail}</li>
              ))}
            </ul>
          </div>
          {index === 0 && (
            <div className="flex-shrink-0 flex gap-4 p-2 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors mt-8">
              <img 
                src={UKP}   
                alt="UKP Lab"
                className="w-16 h-16 object-contain hover:scale-110 transition-transform"
              />
            </div>
          )}
        </div>
      ))}
    </section>
  );
};

export default Projects;
