import React from 'react';

const Experience = ({ experience }) => {
  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Experience</h2>
      {experience.map((exp, index) => (
        <div key={index} className="mb-4 border-l-4 border-gray-200 pl-4">
          <h3 className="font-semibold text-lg">{exp.title} at {exp.company}</h3>
          <p className="text-gray-600">{exp.period} | {exp.location}</p>
          <ul className="list-disc list-inside mt-2 text-gray-600">
            {exp.details.map((detail, idx) => (
              <li key={idx}>{detail}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
};

export default Experience;
