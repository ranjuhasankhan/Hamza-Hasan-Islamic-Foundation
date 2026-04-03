import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>Hamza Hasan Islamic Foundation</h3>
          <p>Dedicated to promoting Islamic education and community welfare.</p>
          <div className="social-links">
            <a href="#" target="_blank" rel="noopener noreferrer">Facebook</a>
            <a href="#" target="_blank" rel="noopener noreferrer">Twitter</a>
            <a href="#" target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href="#" target="_blank" rel="noopener noreferrer">YouTube</a>
          </div>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Services</h3>
          <ul>
            <li><Link to="/services">Qur'an Classes</Link></li>
            <li><Link to="/services">Islamic Lectures</Link></li>
            <li><Link to="/services">Community Programs</Link></li>
            <li><Link to="/services">Marriage Services</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Contact Info</h3>
          <p>📧 Email: ranjuhasankhan@gmail.com</p>
          <p>📱 WhatsApp: 01839696587</p>
          <p>📍 Sirajganj, Dhaka, Bangladesh</p>
          <p>👤 Founder: Hamza Hasan Adnan</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {currentYear} Hamza Hasan Islamic Foundation. All rights reserved.</p>
      </div>
    </footer>
  );
}
