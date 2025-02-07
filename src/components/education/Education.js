import React from 'react';

const Education = ({ education }) => {
  const handleImageError = (e, institution) => {
    console.error(`Failed to load image for ${institution}`);
    console.error('Image path:', e.target.src);
  };

  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Education</h2>
      <div className="space-y-6">
        {education.map((edu, index) => (
          <div key={index} className="flex gap-6 items-start">
            <div className="w-16 h-16 flex-shrink-0 bg-gray-100">
              <img 
                src={edu.logo}  // Use the imported image directly
                alt={`${edu.institution} logo`}
                className="w-full h-full object-contain"
                onError={(e) => handleImageError(e, edu.institution)}
              />
            </div>
            <div className="flex-grow border-l-4 border-gray-200 pl-4">
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
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
