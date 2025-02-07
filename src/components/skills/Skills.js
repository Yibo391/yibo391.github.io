import React from 'react';

const Skills = ({ skills, languages }) => {
  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {Object.entries(skills).map(([category, items]) => (
          <div key={category} className="border-l-4 border-gray-200 dark:border-gray-600 pl-4">
            <h3 className="font-semibold capitalize text-gray-900 dark:text-gray-100">
              {category.replace(/([A-Z])/g, ' $1').trim()}
            </h3>
            <p className="text-gray-600 dark:text-gray-300">{items.join(', ')}</p>
          </div>
        ))}
        <div className="border-l-4 border-gray-200 dark:border-gray-600 pl-4">
          <h3 className="font-semibold text-gray-800 dark:text-white">Languages</h3>
          <p className="text-gray-600 dark:text-gray-300">{languages.join(', ')}</p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
