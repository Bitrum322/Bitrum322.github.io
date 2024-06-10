import React from 'react';
import profileImage from '../images/photo_2024-06-06_19-01-46.jpg';
import './About.css'; // Импортируем стили для компонента About

const About = () => (
  <section id="about">
    <h2>Обо мне:</h2>
    <div className="profile-container">
      <img src={profileImage} alt="Profile" className="profile-image" />
      <p className="profile-text">Студент 3 курса Фин.Университета.</p>
    </div>
  </section>
);

export default About;
