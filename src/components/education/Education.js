import React from 'react';

const Education = ({ education }) => {
  const handleImageError = (e, institution) => {
    console.error(`Failed to load image for ${institution}`);
    console.error('Image path:', e.target.src);
  };

  return (
    <section className="mb-8">
      <h2 className="text-xl md:text-2xl font-bold text-gray-800 dark:text-white mb-6">Education</h2>
      <div className="space-y-6">
        {education.map((edu, index) => (
          <div key={index} className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6 hover:shadow-md transition-all">
            <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-start">
              <div className="w-16 h-16 flex-shrink-0 bg-white dark:bg-gray-600 rounded-xl p-3 hover:bg-blue-50 dark:hover:bg-gray-500 transition-colors">
                <img 
                  src={edu.logo}
                  alt={`${edu.institution} logo`}
                  className="w-full h-full object-contain hover:scale-110 transition-transform"
                  onError={(e) => handleImageError(e, edu.institution)}
                />
              </div>
              <div className="flex-grow">
                <h3 className="font-semibold text-lg text-gray-800 dark:text-white">{edu.institution}</h3>
                <p className="text-blue-600 dark:text-blue-300 font-medium">{edu.degree}</p>
                <p className="text-gray-600 dark:text-gray-300 text-sm">{edu.period}</p>
                <div className="mt-4">
                  <p className="font-medium text-gray-800 dark:text-white mb-2">Main Courses:</p>
                  <div className="flex flex-wrap gap-2">
                    {edu.mainCourses.map((course, idx) => (
                      <span key={idx} className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 px-3 py-1 rounded-full text-sm">
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
