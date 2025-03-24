import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer-section">
      <p>© {new Date().getFullYear()} Yash Thakur. All Rights Reserved.</p>
    </footer>
  );
}

export default Footer;
