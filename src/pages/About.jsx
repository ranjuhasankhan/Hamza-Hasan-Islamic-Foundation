import React from 'react';
import '../styles/About.css';

export default function About() {
  return (
    <div className="about">
      <section className="about-hero">
        <h1>About Us</h1>
        <p>Learn about our organization and mission</p>
      </section>

      <section className="about-content">
        <div className="about-section">
          <h2>Our Mission</h2>
          <p>
            Hamza Hasan Islamic Foundation is dedicated to promoting Islamic education, 
            fostering community development, and providing welfare services to members of our community. 
            Founded by Hamza Hasan Adnan, our organization has been serving the Islamic community 
            for over 15 years with unwavering commitment to excellence and compassion.
          </p>
        </div>

        <div className="about-section">
          <h2>Our Vision</h2>
          <p>
            To create a thriving, educated, and compassionate Islamic community where individuals 
            and families can grow spiritually, intellectually, and socially. We envision a world 
            where Islamic values guide our actions and positively impact society at large.
          </p>
        </div>

        <div className="about-section">
          <h2>Our Founder</h2>
          <div className="founder-info">
            <h3>Hamza Hasan Adnan</h3>
            <p>
              Hamza Hasan Adnan is a dedicated Islamic scholar and community leader with a passion 
              for Islamic education and social welfare. With his leadership and vision, the foundation 
              has grown to serve hundreds of families and individuals across the region.
            </p>
            <p>
              His commitment to spreading Islamic knowledge and serving humanity has inspired our entire 
              organization to maintain the highest standards of service and integrity.
            </p>
          </div>
        </div>

        <div className="about-section">
          <h2>Core Values</h2>
          <div className="values-grid">
            <div className="value-card">
              <h4>🕌 Faith</h4>
              <p>Strong Islamic principles guide all our actions</p>
            </div>
            <div className="value-card">
              <h4>📚 Education</h4>
              <p>Knowledge is the foundation of community growth</p>
            </div>
            <div className="value-card">
              <h4>🤝 Service</h4>
              <p>Dedicated to serving our community selflessly</p>
            </div>
            <div className="value-card">
              <h4>💚 Compassion</h4>
              <p>We care for the well-being of all community members</p>
            </div>
            <div className="value-card">
              <h4>🌟 Excellence</h4>
              <p>We strive for the highest quality in all our programs</p>
            </div>
            <div className="value-card">
              <h4>🕯️ Unity</h4>
              <p>Bringing the community together in harmony</p>
            </div>
          </div>
        </div>

        <div className="about-section">
          <h2>Our History</h2>
          <p>
            Founded in 2009, Hamza Hasan Islamic Foundation started as a small educational initiative 
            with just a handful of students learning the Qur'an. Over the years, our programs have expanded 
            to include Islamic lectures, community welfare services, youth development programs, and much more.
          </p>
          <p>
            Today, we serve a diverse community of over 500 active members and have positively impacted 
            the lives of thousands of individuals. Our growth is a testament to the dedication of our 
            volunteers, supporters, and the wonderful community members who believe in our mission.
          </p>
        </div>

        <div className="about-section">
          <h2>Achievements</h2>
          <ul className="achievements-list">
            <li>✓ Established comprehensive Qur'an education center</li>
            <li>✓ Trained over 1000 students in Islamic education</li>
            <li>✓ Organized 50+ community welfare programs</li>
            <li>✓ Provided financial assistance to 200+ families</li>
            <li>✓ Successfully arranged marriages following Islamic guidelines</li>
            <li>✓ Established youth mentorship programs</li>
            <li>✓ Built strong interfaith community relationships</li>
            <li>✓ Recognized for community service excellence</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
