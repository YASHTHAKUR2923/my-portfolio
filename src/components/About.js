import React from 'react';
import './About.css';

function About() {
  return (
    <section id="about" className="section about-section fade-in-up">
      <h2>About Me</h2>
      <div className="about-content">
        <p>
          When I’m not coding, you’ll find me exploring new tech trends, 
          hitting the gym, or binge-watching shows like 
          <em> Breaking Bad</em> and <em>Narcos</em>. 
          I also swear by cold showers every morning—they keep me refreshed, 
          focused, and ready to take on new challenges!
        </p>
        <p>
          I specialize in building scalable and efficient digital solutions. 
          Whether it’s designing visually appealing interfaces, optimizing 
          database performance, or developing robust backend architectures, 
          I thrive on turning complex problems into elegant, functional applications.
        </p>
      </div>
    </section>
  );
}

export default About;
