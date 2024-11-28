import React from 'react';

function Projects() {
  return (
    <section id="projects">
      <h2>Relevant Projects</h2>
      
      <div className="project-item">
        <h3>Cloud-Disk Personal Project</h3>
        <ul>
          <li>Developed a cloud storage application using Spring Boot, MyBatis, Spring Security, and Vue 3.</li>
          <li>Created a secure login system to ensure user authentication and data protection.</li>
        </ul>
      </div>

      <div className="project-item">
        <h3>Desktop-like Single Page Application</h3>
        <p className="project-type">University Project</p>
        <ul>
          <li>Enabled users to open, minimize, and drag application windows, enhancing user interactivity.</li>
          <li>Integrated a real-time chat room using WebSockets to provide engaging features.</li>
        </ul>
      </div>

      <div className="project-item">
        <h3>GitHub Issue List Website</h3>
        <p className="project-type">University Project</p>
        <ul>
          <li>Developed a website to display GitHub issues in real-time by utilizing GitHub Hooks.</li>
          <li>Configured Nginx to perform reverse proxy, ensuring smooth and secure website performance.</li>
        </ul>
      </div>
    </section>
  );
}

export default Projects; 