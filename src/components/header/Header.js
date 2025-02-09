import React from 'react';

const Header = ({ name, contact }) => {
  return (
    <header>
      <h1 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 md:mb-6">{name}</h1>
      <div className="text-base md:text-lg text-gray-600 dark:text-gray-300 space-y-2">
        <p className="flex items-center gap-2">
          <span>📍</span> {contact.location}
        </p>
        <p className="flex items-center gap-2">
          <span>📱</span> {contact.phone}
        </p>
        <p className="flex items-center gap-2 break-all">
          <span>📧</span> {contact.email}
        </p>
      </div>
    </header>
  );
};

export default Header;
