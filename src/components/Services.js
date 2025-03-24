import React from 'react';
import './Services.css';

function Services() {
  return (
    <section id="services" className="section services-section fade-in-up">
      <h2>Services I Offer</h2>
      <div className="services-grid">
        <div className="service-card">
          <h3>Full Stack Web Development</h3>
          <p>
            Custom websites & apps with React.js, Node.js, .NET, Python, plus 
            API integration & performance optimization.
          </p>
        </div>
        <div className="service-card">
          <h3>Frontend Development</h3>
          <p>
            Responsive, modern UI with HTML, CSS, JavaScript, React.js, & Figma. 
            Pixel-perfect and dynamic experiences.
          </p>
        </div>
        <div className="service-card">
          <h3>Backend Development</h3>
          <p>
            Scalable & secure backends using Node.js, .NET, Python, 
            with SQL & PostgreSQL databases.
          </p>
        </div>
        <div className="service-card">
          <h3>WordPress Development</h3>
          <p>
            Custom WordPress themes, plugins, SEO-friendly setups, 
            and performance optimization.
          </p>
        </div>
        <div className="service-card">
          <h3>UI/UX Design & Prototyping</h3>
          <p>
            Wireframing & prototyping in Figma, ensuring user-friendly, 
            intuitive interfaces.
          </p>
        </div>
        <div className="service-card">
          <h3>Database Design & Management</h3>
          <p>
            SQL & PostgreSQL data structuring, migration, backup, and security 
            best practices for robust solutions.
          </p>
        </div>
        <div className="service-card">
          <h3>E-Commerce & CMS Development</h3>
          <p>
            Building e-commerce stores (WooCommerce, custom) & easy 
            content management integrations.
          </p>
        </div>
        <div className="service-card">
          <h3>API Development & Integration</h3>
          <p>
            Secure & scalable APIs, third-party service integrations 
            (payment gateways, CRMs, etc.).
          </p>
        </div>
      </div>
    </section>
  );
}

export default Services;
