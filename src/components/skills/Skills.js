import React from 'react';

const Skills = ({ skills, languages }) => {
  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {Object.entries(skills).map(([category, items]) => (
          <div key={category} className="border-l-4 border-gray-200 pl-4">
            <h3 className="font-semibold capitalize">{category.replace(/([A-Z])/g, ' $1').trim()}</h3>
            <p className="text-gray-600">{items.join(', ')}</p>
          </div>
        ))}
        <div className="border-l-4 border-gray-200 pl-4">
          <h3 className="font-semibold">Languages</h3>
          <p className="text-gray-600">{languages.join(', ')}</p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
