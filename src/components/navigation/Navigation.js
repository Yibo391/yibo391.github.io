import React from 'react';

const Navigation = ({ setActiveSection }) => {
  const navItems = [
    { id: 'profile', icon: '👤', label: 'Profile' },
    { id: 'education', icon: '🎓', label: 'Education' },
    { id: 'experience', icon: '💼', label: 'Experience' },
    { id: 'projects', icon: '🚀', label: 'Projects' },
    { id: 'skills', icon: '⚡', label: 'Skills' },
    { id: 'hobbies', icon: '🎯', label: 'Hobbies' },
  ];

  return (
    <nav className="fixed md:w-20 w-full md:h-screen h-16 md:left-0 bottom-0 md:top-0 flex md:flex-col flex-row items-center justify-evenly md:pt-6 bg-white dark:bg-gray-800 shadow-lg z-50">
      {navItems.map((item) => (
        <button
          key={item.id}
          onClick={() => setActiveSection(item.id)}
          className="relative md:mb-4 flex items-center justify-center
            w-12 h-12 md:w-14 md:h-14 bg-gray-100 rounded-full
            hover:rounded-2xl hover:bg-blue-500 hover:text-white
            transition-all duration-300 ease-in-out
            text-gray-700 dark:text-gray-300 dark:bg-gray-700 group"
          aria-label={item.label}
        >
          <span className="text-xl transition-transform group-hover:scale-105">{item.icon}</span>
          <span className="hidden md:block absolute left-full ml-3 
            bg-gray-800 text-white text-sm px-3 py-2 rounded-lg
            opacity-0 invisible group-hover:opacity-100 group-hover:visible 
            transition-all duration-200 whitespace-nowrap">
            {item.label}
          </span>
        </button>
      ))}
    </nav>
  );
};

export default Navigation;
