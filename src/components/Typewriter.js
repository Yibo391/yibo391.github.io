import React, { useState, useEffect } from 'react';
import './Typewriter.css';

function Typewriter({ text, speed = 100 }) {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    let index = 0;
    const intervalId = setInterval(() => {
      if (index < text.length) {
        setDisplayedText((prev) => prev + text.charAt(index));
        index++;
      } else {
        clearInterval(intervalId);
      }
    }, speed);
    
    return () => clearInterval(intervalId);
  }, [text, speed]);

  return (
    <div className="typewriter-container">
      <p className="typewriter-text">{displayedText}</p>
    </div>
  );
}

export default Typewriter; 