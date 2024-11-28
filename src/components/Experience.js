import React from 'react';

function Experience() {
  return (
    <section id="experience">
      <h2>Experience</h2>
      <div className="experience-item">
        <h3>Internship - Lakritsoft AB</h3>
        <p className="date">July 2021 - November 2021</p>
        <p className="location">Gothenburg, SE</p>
        <ul>
          <li>Built a single-page application to display a restaurant's menu for Pedagogen Sushi Mölndal 
            (<a 
              href="https://pedagogensushi-molndal.github.io/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="project-link"
            >
              View Website
            </a>).
          </li>
          <li>Implemented responsive design to ensure mobile-friendly user experience.</li>
          <li>Successfully deployed and maintained the application on GitHub Pages.</li>
          <li>Collaborated with restaurant owners to create an intuitive and easy-to-update menu system.</li>
        </ul>
      </div>
    </section>
  );
}

export default Experience; 