import React from 'react';

const Education = ({ education }) => {
  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Education</h2>
      <div className="space-y-4">
        {education.map((edu, index) => (
          <div key={index} className="border-l-4 border-gray-200 pl-4">
            <h3 className="font-semibold text-lg">{edu.institution}</h3>
            <p className="text-gray-600">{edu.period}</p>
            <p className="font-medium">{edu.degree}</p>
            <div className="mt-2">
              <p className="font-medium">Main Courses:</p>
              <ul className="list-disc list-inside text-gray-600">
                {edu.mainCourses.map((course, idx) => (
                  <li key={idx}>{course}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
