import React from 'react';

const Hobbies = ({ hobbies }) => {
  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">Hobbies & Interests</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {hobbies.map((hobby, index) => (
          <div 
            key={index} 
            className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 hover:shadow-md transition-shadow"
          >
            <div className="flex items-center gap-3 mb-3">
              <span className="text-2xl">{hobby.icon}</span>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                {hobby.category}
              </h3>
            </div>
            <div className="space-y-2">
              <div className="flex flex-wrap gap-2">
                {hobby.items.map((item, idx) => (
                  <span 
                    key={idx}
                    className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 
                             px-3 py-1 rounded-full text-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                {hobby.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hobbies;
