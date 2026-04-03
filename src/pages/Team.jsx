import React from 'react';
import '../styles/Team.css';

export default function Team() {
  const teamMembers = [
    {
      id: 1,
      name: 'Hamza Hasan Adnan',
      role: 'Founder & Principal Scholar',
      qualification: 'Islamic Theology & Islamic Law',
      experience: '25+ years',
      image: '👨‍🎓'
    },
    {
      id: 2,
      name: 'Dr. Ahmed Khan',
      role: 'Head of Education',
      qualification: 'PhD in Islamic Education',
      experience: '20+ years',
      image: '👨‍🏫'
    },
    {
      id: 3,
      name: 'Fatima Al-Rashid',
      role: 'Women\'s Programs Director',
      qualification: 'Islamic Studies & Social Work',
      experience: '15+ years',
      image: '👩‍🏫'
    },
    {
      id: 4,
      name: 'Muhammad Hassan',
      role: 'Qur\'an Teacher',
      qualification: 'Hafiz & Tajweed Specialist',
      experience: '10+ years',
      image: '📖'
    },
    {
      id: 5,
      name: 'Sarah Ibrahim',
      role: 'Community Services Manager',
      qualification: 'Social Services & Community Development',
      experience: '12+ years',
      image: '🤝'
    },
    {
      id: 6,
      name: 'Ali Merchant',
      role: 'Youth Programs Coordinator',
      qualification: 'Education & Youth Development',
      experience: '8+ years',
      image: '👨‍💼'
    },
    {
      id: 7,
      name: 'Aisha Patel',
      role: 'Administrative Manager',
      qualification: 'Business Administration',
      experience: '7+ years',
      image: '👩‍💼'
    },
    {
      id: 8,
      name: 'Hassan Rauf',
      role: 'Marriage & Family Counselor',
      qualification: 'Islamic Counseling & Mediation',
      experience: '9+ years',
      image: '💍'
    }
  ];

  return (
    <div className="team">
      <section className="team-hero">
        <h1>Our Team</h1>
        <p>Dedicated professionals serving our community</p>
      </section>

      <section className="team-content">
        <div className="team-intro">
          <h2>Meet Our Leadership</h2>
          <p>
            Our team consists of experienced Islamic scholars, educators, and social workers 
            committed to providing the highest quality services to our community members. 
            Each team member brings years of expertise and dedication to their respective fields.
          </p>
        </div>

        <div className="team-grid">
          {teamMembers.map(member => (
            <div key={member.id} className="team-member-card">
              <div className="member-avatar">{member.image}</div>
              <div className="member-info">
                <h3>{member.name}</h3>
                <p className="member-role">{member.role}</p>
                <p className="member-qualification">{member.qualification}</p>
                <p className="member-experience">Experience: {member.experience}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="volunteers">
        <h2>Our Volunteers</h2>
        <p>
          Beyond our core team, we have dozens of dedicated volunteers who contribute their time 
          and talents to support our mission. Our volunteers help with:
        </p>
        <ul className="volunteer-contributions">
          <li>✓ Classroom assistance and tutoring</li>
          <li>✓ Event organization and management</li>
          <li>✓ Community outreach programs</li>
          <li>✓ Building maintenance and repairs</li>
          <li>✓ Fundraising and donor relations</li>
          <li>✓ Meal preparation for community events</li>
          <li>✓ Technology and media support</li>
          <li>✓ Childcare and youth supervision</li>
        </ul>
        <p className="volunteer-cta">
          Interested in volunteering? 
          <a href="mailto:ranjuhasankhan@gmail.com"> Contact us today!</a>
        </p>
      </section>

      <section className="careers">
        <h2>Join Our Team</h2>
        <p>
          We're always looking for passionate individuals who share our vision and want to 
          contribute to our mission. Whether you're an educator, counselor, administrator, 
          or have other skills to offer, we'd love to hear from you.
        </p>
        <a href="mailto:ranjuhasankhan@gmail.com" className="btn btn-primary">
          Career Inquiries
        </a>
      </section>
    </div>
  );
}
