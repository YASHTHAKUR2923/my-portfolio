import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <section id="contact" className="section contact-section fade-in-up">
      <h2>Contact Me</h2>
      <p>
        Let’s create something amazing together! Whether you’re looking 
        for a tech-savvy developer, an innovative marketer, or a creative partner, 
        I’m here to help.
      </p>

      <div className="contact-details">
        <p>
          <i className="fas fa-envelope"></i>
          <strong>Email:</strong>{' '}
          <a href="mailto:tyash1864@gmail.com">tyash1864@gmail.com</a>
        </p>
        <p>
          <i className="fas fa-phone"></i>
          <strong>Phone:</strong>{' '}
          <a href="tel:+918979584279">+91 8979584279</a>
        </p>
        <p>
          <i className="fab fa-instagram"></i>
          <strong>Instagram:</strong>{' '}
          <a
            href="https://www.instagram.com/lets_goyash"
            target="_blank"
            rel="noreferrer"
          >
            @lets_goyash
          </a>
        </p>
        <p>
          <i className="fab fa-linkedin"></i>
          <strong>LinkedIn:</strong>{' '}
          <a
            href="http://www.linkedin.com/in/yash-thakur-836b34324"
            target="_blank"
            rel="noreferrer"
          >
            Yash Thakur
          </a>
        </p>
        <p>
          <i className="fab fa-github"></i>
          <strong>GitHub:</strong>{' '}
          <a
            href="https://github.com/YASHTHAKUR2923"
            target="_blank"
            rel="noreferrer"
          >
            github.com/YASHTHAKUR2923
          </a>
        </p>
        <p>
          <i className="fab fa-twitter"></i>
          <strong>Twitter:</strong>{' '}
          <a
            href="https://x.com/yash"
            target="_blank"
            rel="noreferrer"
          >
            @yashthakur2923
          </a>
        </p>
      </div>
    </section>
  );
}

export default Contact;
