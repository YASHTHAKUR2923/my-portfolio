import React from 'react';
import './Hero.css';

function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="hero-content animate-fade-slide">
        <h1 className="hero-heading animate-glow">
          Hi, I’m <span>Yash Thakur</span>
        </h1>
        <h2 className="hero-subtitle animate-typing">
          I am a passionate <strong>Full Stack Developer</strong> skilled in 
          <em> HTML, CSS, JavaScript, React.js, Node.js, Python, SQL, PostgreSQL, 
          .NET, WordPress, and Figma</em>.
        </h2>
        <a href="#contact" className="btn animate-pop">
          Let's Work Together
        </a>
      </div>

      {/* Floating animated shapes */}
      <div className="floating-shapes">
        <div className="shape shape1"></div>
        <div className="shape shape2"></div>
        <div className="shape shape3"></div>
        <div className="shape shape4"></div>
      </div>
    </section>
  );
}

export default Hero;
