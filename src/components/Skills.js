import React from 'react';
import { useInView } from 'react-intersection-observer';

function Skills() {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  const skills = {
    "Programming Languages": ["Java", "JavaScript", "Python"],
    "Frameworks & Libraries": ["Spring Boot", "MyBatis", "Vue 3", "Bootstrap", "React"],
    "Database Management": ["MySQL"],
    "Tools & Technologies": ["Git", "Nginx", "Postman", "Tensorflow", "Pytorch", "Scikit-learn", "Jira", "Trello"]
  };

  return (
    <section id="skills" ref={ref} className={`skills-section ${inView ? 'visible' : ''}`}>
      <h2>Skills</h2>
      <div className="skills-container">
        {Object.entries(skills).map(([category, skillList], categoryIndex) => (
          <div className="skill-category" key={category}>
            <h3>{category}</h3>
            <div className="skill-list">
              {skillList.map((skill, skillIndex) => (
                <span 
                  className="skill-tag" 
                  key={skill}
                  style={{'--animation-order': skillIndex + categoryIndex * 5}}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills; 