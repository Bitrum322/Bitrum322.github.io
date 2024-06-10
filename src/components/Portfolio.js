import React, { useState } from 'react';
import projectImage1 from '../images/project1.jpg';
import projectImage2 from '../images/project2.jpg';
import './Portfolio.css'; // Импортируем стили для анимаций

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const toggleDescription = (project) => {
    if (selectedProject === project) {
      setSelectedProject(null);
    } else {
      setSelectedProject(project);
    }
  };

  return (
    <section id="portfolio">
      <h2>Portfolio</h2>
      <div className="projects">
        <div className="project" onClick={() => toggleDescription('project1')}>
          <img src={projectImage1} alt="Project 1" className="project-image" />
          <h3>Project 1</h3>
          {selectedProject === 'project1' && (
            <p className="description">Description of Project 1. This is a detailed description of the first project.</p>
          )}
        </div>
        <div className="project" onClick={() => toggleDescription('project2')}>
          <img src={projectImage2} alt="Project 2" className="project-image" />
          <h3>Project 2</h3>
          {selectedProject === 'project2' && (
            <p className="description">Description of Project 2. This is a detailed description of the second project.</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
