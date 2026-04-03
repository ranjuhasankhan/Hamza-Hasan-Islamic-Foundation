import React from 'react';
import '../styles/Services.css';

export default function Services() {
  const services = [
    {
      id: 1,
      title: "Qur'an Classes",
      icon: '📚',
      description: 'Comprehensive Qur\'an education programs for children, teens, and adults.',
      details: [
        'Memorization (Hifz) programs',
        'Tajweed classes - proper Qur\'an recitation',
        'Qur\'an translation and interpretation',
        'One-on-one tutoring available'
      ]
    },
    {
      id: 2,
      title: 'Islamic Studies',
      icon: '🎓',
      description: 'In-depth learning of Islamic principles, Hadith, Fiqh, and Islamic history.',
      details: [
        'Hadith studies circle',
        'Islamic jurisprudence (Fiqh) classes',
        'Islamic history and biography',
        'Aqeedah (Islamic theology)'
      ]
    },
    {
      id: 3,
      title: 'Youth Programs',
      icon: '👨‍👩‍👧‍👦',
      description: 'Specialized programs for young Muslims combining education and entertainment.',
      details: [
        'Youth mentorship programs',
        'Islamic leadership training',
        'Sports and recreational activities',
        'Career guidance counseling'
      ]
    },
    {
      id: 4,
      title: 'Family Services',
      icon: '👨‍👩‍👧‍👦',
      description: 'Supporting families through counseling, financial aid, and community support.',
      details: [
        'Marital counseling',
        'Pre-marriage courses',
        'Family financial planning',
        'Emergency assistance fund'
      ]
    },
    {
      id: 5,
      title: 'Islamic Lectures',
      icon: '🎤',
      description: 'Regular lectures on Islamic topics by experienced scholars and speakers.',
      details: [
        'Weekly Friday lectures',
        'Seasonal Islamic seminars',
        'Online webinars',
        'Guest speaker events'
      ]
    },
    {
      id: 6,
      title: 'Community Welfare',
      icon: '🤝',
      description: 'Social programs serving the broader community with faith and compassion.',
      details: [
        'Financial assistance program',
        'Food and clothing distribution',
        'Educational scholarships',
        'Healthcare support'
      ]
    },
    {
      id: 7,
      title: 'Marriage Services',
      icon: '💍',
      description: 'Facilitating Islamic marriages through counseling and matchmaking services.',
      details: [
        'Pre-marriage Islamic guidance',
        'Matrimonial services',
        'Wedding coordination',
        'Divorce counseling support'
      ]
    },
    {
      id: 8,
      title: 'Events & Celebrations',
      icon: '🎉',
      description: 'Organizing Islamic celebrations and community gathering throughout the year.',
      details: [
        'Eid celebrations',
        'Ramadan programs',
        'Islamic awareness campaigns',
        'Community iftars'
      ]
    }
  ];

  return (
    <div className="services">
      <section className="services-hero">
        <h1>Our Services</h1>
        <p>Comprehensive Islamic education and community welfare programs</p>
      </section>

      <section className="services-content">
        <div className="services-grid">
          {services.map((service) => (
            <div key={service.id} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <ul className="service-details">
                {service.details.map((detail, index) => (
                  <li key={index}>✓ {detail}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="services-cta">
        <h2>Interested in Our Services?</h2>
        <p>Contact us today to learn more about our programs and how we can serve you.</p>
        <a href="mailto:ranjuhasankhan@gmail.com" className="btn btn-primary">
          Get in Touch
        </a>
      </section>
    </div>
  );
}
