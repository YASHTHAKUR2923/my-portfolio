import React from 'react';
import './Hero.css';

function Hero() {
  return (
    <section id="home" className="hero-section fade-in-up">
      <div className="hero-content">
        <h1>
          Hi, I’m <span>Yash Thakur</span>
        </h1>
        <p className="hero-subtitle">
          I am a passionate <strong>Full Stack Developer</strong> with expertise in 
          <em> HTML, CSS, JavaScript, React.js, Node.js, Python, SQL, PostgreSQL, 
          .NET, WordPress, and Figma</em>.
        </p>
        <a href="#contact" className="btn">
          Let's Work Together
        </a>
      </div>
      <div className="floating-shapes">
        <div className="shape shape1"></div>
        <div className="shape shape2"></div>
        <div className="shape shape3"></div>
      </div>
    </section>
  );
}

export default Hero;
