import React from 'react';
import { useInView } from 'react-intersection-observer';
import tuDarmstadtLogo from '../assets/images/tu-darmstadt.png';
import linnaeusLogo from '../assets/images/linnaeus.png';

function Education() {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  return (
    <section id="education" ref={ref}>
      <h2>Education</h2>
      <div className={`education-container ${inView ? 'visible' : ''}`}>
        <div className="education-item" style={{'--animation-order': 1}}>
          <div className="education-header">
            <img 
              src={tuDarmstadtLogo} 
              alt="TU Darmstadt Logo" 
              className="university-logo"
            />
            <div>
              <h3>Technische Universität Darmstadt</h3>
              <p className="date">October 2023 – Present</p>
              <p className="degree">Master of Science in Computer Science</p>
            </div>
          </div>
          <p>Main Courses: Natural Language Processing, Machine Learning, Large Language Models, Data analysis</p>
        </div>
        
        <div className="education-item" style={{'--animation-order': 2}}>
          <div className="education-header">
            <img 
              src={linnaeusLogo} 
              alt="Linnaeus University Logo" 
              className="university-logo"
            />
            <div>
              <h3>Linnaeus University | Växjö, Sweden</h3>
              <p className="date">August 2021 – August 2023</p>
              <p className="degree">Bachelor of Science in Software Technology</p>
            </div>
          </div>
          <p>Main Courses: Database Management, Computer Networks, Operating Systems, Web Programming, Object-Oriented Programming (OOP) and Software Testing</p>
        </div>
      </div>
    </section>
  );
}

export default Education; 