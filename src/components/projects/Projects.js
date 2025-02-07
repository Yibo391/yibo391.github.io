import React from 'react';

const Projects = ({ projects }) => {
  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Projects</h2>
      {projects.map((project, index) => (
        <div key={index} className="mb-4 border-l-4 border-gray-200 pl-4">
          <h3 className="font-semibold text-lg">{project.title}</h3>
          <ul className="list-disc list-inside mt-2 text-gray-600">
            {project.details.map((detail, idx) => (
              <li key={idx}>{detail}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
};

export default Projects;
