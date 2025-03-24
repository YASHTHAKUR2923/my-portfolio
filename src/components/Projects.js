import React from 'react';
import './Projects.css';

function Projects() {
  return (
    <section id="projects" className="section projects-section fade-in-up">
      <h2>Innovative Web Solutions</h2>
      <p className="intro-text">
        I have developed <strong>three impactful web-based solutions</strong> 
        for my company, leveraging <strong>HTML, CSS, JavaScript, Node.js, Python,
        and PostgreSQL</strong> to enhance efficiency, transparency, 
        and user experience.
      </p>

      <div className="project-card">
        <h3>1️⃣ Training Form System</h3>
        <ul>
          <li>Records Training Date & Time</li>
          <li>Trainer Information</li>
          <li>Employee Participation</li>
          <li>Session Duration</li>
        </ul>
        <p>
          Ensures accurate record-keeping, promotes transparency, 
          and enhances training efficiency.
        </p>
      </div>

      <div className="project-card">
        <h3>2️⃣ Job Portal</h3>
        <ul>
          <li>Graduates, freshers, and experienced can apply seamlessly</li>
          <li>HR teams can track applications efficiently</li>
          <li>Automated application processing & categorized listings</li>
        </ul>
        <p>
          Built using <strong>HTML, CSS, JavaScript, Python, and PostgreSQL</strong> 
          to simplify the recruitment process.
        </p>
      </div>

      <div className="project-card">
        <h3>3️⃣ Resignation Form System</h3>
        <ul>
          <li>Submit resignations online</li>
          <li>Track approval status</li>
          <li>Automated exit formalities</li>
        </ul>
        <p>
          Powered by <strong>Python and PostgreSQL</strong>, it provides 
          a hassle-free offboarding experience.
        </p>
      </div>
    </section>
  );
}

export default Projects;
