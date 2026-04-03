import React, { useState } from 'react';
import '../styles/Events.css';

export default function Events() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const events = [
    {
      id: 1,
      title: 'Weekly Qur\'an Circle',
      category: 'education',
      date: '2026-04-10',
      time: '6:00 PM - 7:30 PM',
      location: 'Main Islamic Center',
      description: 'Join our weekly Qur\'an study session with focus on understanding and reflection.',
      image: '📚'
    },
    {
      id: 2,
      title: 'Friday Islamic Lecture',
      category: 'lecture',
      date: '2026-04-11',
      time: '5:00 PM - 6:30 PM',
      location: 'Mosque Main Hall',
      description: 'Distinguished scholar discussing contemporary Islamic topics.',
      image: '🎤'
    },
    {
      id: 3,
      title: 'Youth Development Workshop',
      category: 'youth',
      date: '2026-04-12',
      time: '4:00 PM - 6:00 PM',
      location: 'Community Center',
      description: 'Interactive sessions for young Muslims on leadership and personal development.',
      image: '👨‍🎓'
    },
    {
      id: 4,
      title: 'Sisters\' Halaqah (Discussion Circle)',
      category: 'education',
      date: '2026-04-13',
      time: '3:00 PM - 4:30 PM',
      location: 'Women\'s Center',
      description: 'Islamic knowledge sharing and community bonding for sisters.',
      image: '👩‍🤝‍👩'
    },
    {
      id: 5,
      title: 'Tajweed Classes - Beginners',
      category: 'education',
      date: '2026-04-15',
      time: '7:00 PM - 8:00 PM',
      location: 'Main Islamic Center',
      description: 'Learn proper Qur\'an recitation with correct pronunciation and rules.',
      image: '📖'
    },
    {
      id: 6,
      title: 'Community Iftar (Breaking Fast)',
      category: 'community',
      date: '2026-04-16',
      time: '6:30 PM Onwards',
      location: 'Main Hall',
      description: 'Join us for community iftar during Ramadan with good food and fellowship.',
      image: '🍽️'
    },
    {
      id: 7,
      title: 'Marriage Seminar: Islamic Principles',
      category: 'family',
      date: '2026-04-18',
      time: '6:00 PM - 8:00 PM',
      location: 'Conference Room',
      description: 'Understanding Islamic marriage concepts and building strong relationships.',
      image: '💍'
    },
    {
      id: 8,
      title: 'Children\'s Islamic Summer Camp',
      category: 'youth',
      date: '2026-05-01',
      time: '9:00 AM - 2:00 PM',
      location: 'Children\'s Center',
      description: 'Fun-filled summer program for children with Islamic education and activities.',
      image: '🏕️'
    },
    {
      id: 9,
      title: 'Eid Celebration & Family Gathering',
      category: 'community',
      date: '2026-04-20',
      time: '10:00 AM Onwards',
      location: 'Main Ground',
      description: 'Grand Eid celebration with prayers, food, games, and family activities.',
      image: '🎉'
    },
    {
      id: 10,
      title: 'Islamic History Lecture Series',
      category: 'lecture',
      date: '2026-04-25',
      time: '5:30 PM - 7:00 PM',
      location: 'Lecture Hall',
      description: 'Exploring important events and personalities in Islamic history.',
      image: '📚'
    }
  ];

  const filteredEvents = selectedCategory === 'all' 
    ? events 
    : events.filter(event => event.category === selectedCategory);

  const categories = [
    { value: 'all', label: 'All Events' },
    { value: 'education', label: 'Education' },
    { value: 'lecture', label: 'Lectures' },
    { value: 'youth', label: 'Youth' },
    { value: 'family', label: 'Family' },
    { value: 'community', label: 'Community' }
  ];

  return (
    <div className="events">
      <section className="events-hero">
        <h1>Our Events</h1>
        <p>Stay updated with our upcoming programs and gatherings</p>
      </section>

      <section className="events-content">
        <div className="events-filter">
          <h3>Filter by Category:</h3>
          <div className="filter-buttons">
            {categories.map(category => (
              <button
                key={category.value}
                className={`filter-btn ${selectedCategory === category.value ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category.value)}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        <div className="events-list">
          {filteredEvents.map(event => (
            <div key={event.id} className="event-item">
              <div className="event-image">{event.image}</div>
              <div className="event-details">
                <h3>{event.title}</h3>
                <div className="event-meta">
                  <span className="event-date">📅 {event.date}</span>
                  <span className="event-time">⏰ {event.time}</span>
                  <span className="event-location">📍 {event.location}</span>
                </div>
                <p className="event-description">{event.description}</p>
                <button className="register-btn">Register Now</button>
              </div>
            </div>
          ))}
        </div>

        {filteredEvents.length === 0 && (
          <div className="no-events">
            <p>No events found in this category.</p>
          </div>
        )}
      </section>

      <section className="events-newsletter">
        <h2>Never Miss an Event</h2>
        <p>Subscribe to our newsletter to get updates about upcoming events and programs.</p>
        <form className="newsletter-form">
          <input 
            type="email" 
            placeholder="Enter your email" 
            required 
          />
          <button type="submit" className="btn btn-primary">Subscribe</button>
        </form>
      </section>
    </div>
  );
}
