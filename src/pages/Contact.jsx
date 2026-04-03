import React, { useState } from 'react';
import '../styles/Contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  return (
    <div className="contact">
      <section className="contact-hero">
        <h1>Contact Us</h1>
        <p>Get in touch with us today</p>
      </section>

      <section className="contact-content">
        <div className="contact-info">
          <h2>Contact Information</h2>
          
          <div className="info-item">
            <div className="info-icon">📧</div>
            <div className="info-details">
              <h3>Email</h3>
              <p>
                <a href="mailto:ranjuhasankhan@gmail.com">ranjuhasankhan@gmail.com</a>
              </p>
              <p>Response time: Within 24 hours</p>
            </div>
          </div>

          <div className="info-item">
            <div className="info-icon">📱</div>
            <div className="info-details">
              <h3>WhatsApp & Phone</h3>
              <p>
                <a href="https://wa.me/01839696587">01839696587</a>
              </p>
              <p>Available: 9 AM - 9 PM (Bangladesh Time)</p>
            </div>
          </div>

          <div className="info-item">
            <div className="info-icon">📍</div>
            <div className="info-details">
              <h3>Address</h3>
              <p>Hamza Hasan Islamic Foundation</p>
              <p>Sirajganj, Dhaka, Bangladesh</p>
            </div>
          </div>

          <div className="info-item">
            <div className="info-icon">👤</div>
            <div className="info-details">
              <h3>Founder</h3>
              <p>Hamza Hasan Adnan</p>
              <p>Islamic Scholar & Community Leader</p>
            </div>
          </div>

          <div className="office-hours">
            <h3>Office Hours</h3>
            <ul>
              <li>Monday - Friday: 10 AM - 6 PM</li>
              <li>Saturday: 10 AM - 4 PM</li>
              <li>Sunday & Islamic Holidays: Closed</li>
            </ul>
          </div>

          <div className="social-contact">
            <h3>Follow Us</h3>
            <div className="social-links">
              <a href="#" target="_blank" rel="noopener noreferrer">Facebook</a>
              <a href="#" target="_blank" rel="noopener noreferrer">Twitter</a>
              <a href="#" target="_blank" rel="noopener noreferrer">Instagram</a>
              <a href="#" target="_blank" rel="noopener noreferrer">YouTube</a>
            </div>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <h2>Send us a Message</h2>

          <div className="form-group">
            <label htmlFor="name">Full Name *</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your full name"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address *</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="your@email.com"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Your phone number"
            />
          </div>

          <div className="form-group">
            <label htmlFor="subject">Subject *</label>
            <select
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
            >
              <option value="">Select a subject</option>
              <option value="general">General Inquiry</option>
              <option value="programs">Programs & Services</option>
              <option value="events">Events & Registrations</option>
              <option value="donation">Donation</option>
              <option value="volunteer">Volunteering</option>
              <option value="counseling">Counseling Services</option>
              <option value="marriage">Marriage Services</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="message">Message *</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Please share your message, questions, or concerns..."
              rows="6"
              required
            ></textarea>
          </div>

          <button type="submit" className="btn btn-primary btn-lg">
            Send Message
          </button>
        </form>
      </section>

      <section className="map-section">
        <h2>Our Location</h2>
        <div className="map-placeholder">
          <p>📍 Hamza Hasan Islamic Foundation</p>
          <p>Sirajganj, Dhaka, Bangladesh</p>
          <p style={{ marginTop: '1rem', fontSize: '0.9rem' }}>
            *Map embed functionality can be added by integrating Google Maps or similar service
          </p>
        </div>
      </section>

      <section className="faq-quick">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-grid">
          <div className="faq-item">
            <h3>How do I enroll in Qur'an classes?</h3>
            <p>You can contact us directly via email or WhatsApp, and we'll guide you through the enrollment process.</p>
          </div>
          <div className="faq-item">
            <h3>Are programs available online?</h3>
            <p>Yes! We offer selected programs online as well. Contact us for details about online courses.</p>
          </div>
          <div className="faq-item">
            <h3>Do you offer counseling services?</h3>
            <p>Yes, we provide Islamic counseling services for marriage, family, and personal matters by appointment.</p>
          </div>
          <div className="faq-item">
            <h3>How can I make a donation?</h3>
            <p>Visit our Donate page or contact us directly for various donation methods available.</p>
          </div>
          <div className="faq-item">
            <h3>Can I volunteer?</h3>
            <p>Absolutely! We welcome volunteers. Please fill out the form or contact us with your interests and skills.</p>
          </div>
          <div className="faq-item">
            <h3>What are the membership fees?</h3>
            <p>Many of our community programs are free. Some specialized courses may have nominal fees. Ask for details!</p>
          </div>
        </div>
      </section>
    </div>
  );
}
