import React from 'react';

const Header = ({ name, contact }) => {
  return (
    <header className="mb-8">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">{name}</h1>
      <div className="text-gray-600 space-y-1">
        <p>{contact.location}</p>
        <p>{contact.phone}</p>
        <p>{contact.email}</p>
      </div>
    </header>
  );
};

export default Header;
