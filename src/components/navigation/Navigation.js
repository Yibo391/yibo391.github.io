import React from 'react';

const Navigation = ({ setActiveSection }) => {
  const navItems = [
    { id: 'profile', icon: '👤', label: 'Profile' },
    { id: 'education', icon: '🎓', label: 'Education' },
    { id: 'experience', icon: '💼', label: 'Experience' },
    { id: 'projects', icon: '🚀', label: 'Projects' },
    { id: 'skills', icon: '⚡', label: 'Skills' },
  ];

  return (
    <nav className="w-20 bg-white dark:bg-gray-800 h-screen fixed left-0 top-0 flex flex-col items-center pt-6 shadow-lg">
      {navItems.map((item) => (
        <button
          key={item.id}
          onClick={() => setActiveSection(item.id)}
          className={`mb-4 flex items-center justify-start overflow-hidden
            w-12 bg-gray-100 rounded-full
            hover:rounded-lg hover:w-16 hover:bg-blue-500 hover:text-white
            transition-all duration-300 ease-in-out
            text-gray-700 h-12 px-3 shadow-sm`}
        >
          <span className="text-xl min-w-[24px]">{item.icon}</span>
          <span className="text-sm whitespace-nowrap transition-opacity duration-300 opacity-0 hover:opacity-100">
            {item.label}
          </span>
        </button>
      ))}
    </nav>
  );
};

export default Navigation;
