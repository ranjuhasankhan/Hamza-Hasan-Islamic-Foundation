import React, { useState } from 'react';
import '../styles/Donation.css';

export default function Donation() {
  const [donationAmount, setDonationAmount] = useState('');
  const [donationType, setDonationType] = useState('one-time');

  const predefinedAmounts = [10, 25, 50, 100, 250, 500];

  const handleDonate = (e) => {
    e.preventDefault();
    alert(`Thank you for your donation of $${donationAmount || 'custom amount'}!\n\nYou will be redirected to our secure payment gateway.`);
  };

  const donationPrograms = [
    {
      id: 1,
      title: 'Qur\'an Education Fund',
      icon: '📚',
      description: 'Support comprehensive Qur\'an education programs for children and adults.',
      amount: '₹500 - ₹10,000'
    },
    {
      id: 2,
      title: 'Scholarship Program',
      icon: '🎓',
      description: 'Help underprivileged students pursue Islamic education and career development.',
      amount: '₹1,000 - ₹50,000'
    },
    {
      id: 3,
      title: 'Family Welfare Fund',
      icon: '👨‍👩‍👧‍👦',
      description: 'Provide financial assistance to families in need during emergencies.',
      amount: '₹500 - ₹5,000'
    },
    {
      id: 4,
      title: 'Building & Facility Fund',
      icon: '🏛️',
      description: 'Help maintain and expand our community center facilities.',
      amount: '₹2,000 - ₹100,000'
    },
    {
      id: 5,
      title: 'Food & Shelter Program',
      icon: '🍽️',
      description: 'Support community meals and shelter for homeless families.',
      amount: '₹300 - ₹10,000'
    },
    {
      id: 6,
      title: 'Healthcare Assistance',
      icon: '⚕️',
      description: 'Help community members access essential healthcare services.',
      amount: '₹1,000 - ₹25,000'
    }
  ];

  return (
    <div className="donation">
      <section className="donation-hero">
        <h1>Support Our Mission</h1>
        <p>Your generous donations help us serve the community better</p>
      </section>

      <section className="donation-content">
        <div className="donation-form-section">
          <h2>Make a Donation</h2>
          
          <form className="donation-form" onSubmit={handleDonate}>
            <div className="form-group">
              <label>Donation Type</label>
              <div className="donation-type-toggle">
                <button
                  type="button"
                  className={`type-btn ${donationType === 'one-time' ? 'active' : ''}`}
                  onClick={() => setDonationType('one-time')}
                >
                  One-Time Donation
                </button>
                <button
                  type="button"
                  className={`type-btn ${donationType === 'monthly' ? 'active' : ''}`}
                  onClick={() => setDonationType('monthly')}
                >
                  Monthly Donation
                </button>
              </div>
            </div>

            <div className="form-group">
              <label>Select Amount</label>
              <div className="preset-amounts">
                {predefinedAmounts.map(amount => (
                  <button
                    key={amount}
                    type="button"
                    className={`amount-btn ${donationAmount === amount.toString() ? 'active' : ''}`}
                    onClick={() => setDonationAmount(amount.toString())}
                  >
                    ₹{amount}
                  </button>
                ))}
              </div>
              <input
                type="number"
                placeholder="Enter custom amount"
                value={donationAmount}
                onChange={(e) => setDonationAmount(e.target.value)}
                min="1"
              />
            </div>

            <div className="form-group">
              <label htmlFor="name">Full Name *</label>
              <input
                type="text"
                id="name"
                placeholder="Your name"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address *</label>
              <input
                type="email"
                id="email"
                placeholder="your@email.com"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="tel"
                id="phone"
                placeholder="Your phone number"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message (Optional)</label>
              <textarea
                id="message"
                placeholder="Any message or dedication..."
                rows="4"
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary btn-lg">
              {donationAmount ? `Donate ₹${donationAmount}` : 'Proceed to Donation'}
            </button>
          </form>
        </div>

        <div className="donation-programs">
          <h2>Where Your Money Goes</h2>
          <p>Choose a program you'd like to support or make a general donation:</p>
          <div className="programs-grid">
            {donationPrograms.map(program => (
              <div key={program.id} className="program-card">
                <div className="program-icon">{program.icon}</div>
                <h3>{program.title}</h3>
                <p>{program.description}</p>
                <p className="program-amount">Typical: {program.amount}</p>
                <button className="program-donate-btn">
                  Donate to This Program
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="donation-info">
        <h2>Tax & Legal Information</h2>
        <div className="info-grid">
          <div className="info-card">
            <h3>Tax-Deductible</h3>
            <p>Our organization is registered as a charitable foundation. Your donations may be tax-deductible. Consult with your tax advisor for details.</p>
          </div>
          <div className="info-card">
            <h3>Secure Donations</h3>
            <p>All donations are processed through secure, encrypted payment gateways. Your financial information is safe with us.</p>
          </div>
          <div className="info-card">
            <h3>Transparency</h3>
            <p>We maintain complete transparency in our finances. Regular reports are available upon request.</p>
          </div>
          <div className="info-card">
            <h3>Recognition</h3>
            <p>Major donors will be recognized in our community newsletter and annual report (unless you prefer anonymity).</p>
          </div>
        </div>
      </section>

      <section className="other-ways">
        <h2>Other Ways to Help</h2>
        <div className="ways-grid">
          <div className="way-card">
            <h3>📬 Bank Transfer</h3>
            <p>Contact us for detailed banking information and fund transfer instructions.</p>
          </div>
          <div className="way-card">
            <h3>🤝 Volunteer</h3>
            <p>Contribute your time and skills to support our community programs.</p>
          </div>
          <div className="way-card">
            <h3>💼 Corporate Sponsorship</h3>
            <p>Interested in corporate sponsorship? Let's discuss partnership opportunities.</p>
          </div>
          <div className="way-card">
            <h3>🎁 In-Kind Gifts</h3>
            <p>Donate goods, books, or services that support our programs.</p>
          </div>
        </div>
        <p style={{ textAlign: 'center', marginTop: '2rem' }}>
          For more information: <a href="mailto:ranjuhasankhan@gmail.com">ranjuhasankhan@gmail.com</a> | 
          <a href="https://wa.me/01839696587"> WhatsApp: 01839696587</a>
        </p>
      </section>
    </div>
  );
}
