import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

export default function Home() {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Hamza Hasan Islamic Foundation</h1>
          <p className="hero-subtitle">Empowering Communities Through Islamic Education & Welfare</p>
          <div className="hero-buttons">
            <Link to="/donate" className="btn btn-primary">Donate Now</Link>
            <Link to="/services" className="btn btn-secondary">Our Services</Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <h2>About Our Organization</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">📚</div>
            <h3>Qur'an Classes</h3>
            <p>Comprehensive Qur'an education for all age groups with qualified instructors.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🎓</div>
            <h3>Islamic Education</h3>
            <p>In-depth Islamic studies covering Hadith, Fiqh, and Islamic history.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🤝</div>
            <h3>Community Services</h3>
            <p>Social welfare programs supporting families and community members.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">💍</div>
            <h3>Islamic Counseling</h3>
            <p>Marriage guidance and Islamic counseling services for all members.</p>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="stats">
        <div className="stat-card">
          <h3>500+</h3>
          <p>Active Members</p>
        </div>
        <div className="stat-card">
          <h3>15+</h3>
          <p>Years of Service</p>
        </div>
        <div className="stat-card">
          <h3>50+</h3>
          <p>Community Programs</p>
        </div>
        <div className="stat-card">
          <h3>1000+</h3>
          <p>Lives Impacted</p>
        </div>
      </section>

      {/* Latest Events */}
      <section className="latest-events">
        <h2>Upcoming Events</h2>
        <div className="events-preview">
          <div className="event-card">
            <h4>Weekly Quran Circle</h4>
            <p>📅 Every Friday, 6:00 PM</p>
            <p>Join us for our weekly Qur'an study session.</p>
            <Link to="/events" className="read-more">View All Events →</Link>
          </div>
          <div className="event-card">
            <h4>Islamic Lecture Series</h4>
            <p>📅 Every Saturday, 5:00 PM</p>
            <p>Distinguished speakers on Islamic topics.</p>
            <Link to="/events" className="read-more">View All Events →</Link>
          </div>
          <div className="event-card">
            <h4>Youth Development Program</h4>
            <p>📅 Sundays, 4:00 PM</p>
            <p>Interactive sessions for young Muslims.</p>
            <Link to="/events" className="read-more">View All Events →</Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <h2>Support Our Mission</h2>
        <p>Help us continue our work in Islamic education and community welfare.</p>
        <Link to="/donate" className="btn btn-primary">Make a Donation</Link>
      </section>
    </div>
  );
}
