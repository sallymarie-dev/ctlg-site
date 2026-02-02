import React from 'react';
import '../styles/GiveModal.css';

const GiveModal = () => {
  const categories = [
    { 
      title: "Tithes & Offering", 
      tag: "GENERAL FUND", 
      desc: "Supporting the daily operations and ministry of the church.",
      scripture: "Bring all the tithes into the storehouse, that there may be food in My house.",
      reference: "Malachi 3:10",
      featured: false 
    },
    { 
      title: "Building Fund", 
      tag: "VISION 2026", 
      desc: "Investing in the future growth and maintenance of our sanctuary.",
      scripture: "Go up to the mountains and bring wood and build the house, that I may take pleasure in it and be glorified.",
      reference: "Haggai 1:8",
      featured: true 
    },
    { 
      title: "Love Offering", 
      tag: "PASTORAL CARE", 
      desc: "Special gifts to support our leadership and guest speakers.",
      scripture: "Let the elders who rule well be considered worthy of double honor.",
      reference: "1 Timothy 5:17",
      featured: false 
    }
  ];

  return (
    <div className="give-container">
      <div className="give-header">
        <h2 className="give-title">Pay Your Tithes & Offerings</h2>
        <p className="give-subtitle">"God loves a cheerful giver." — 2 Corinthians 9:7</p>
      </div>

      <div className="give-grid">
        {categories.map((cat, i) => (
          <div key={i} className={`give-card ${cat.featured ? 'featured' : ''}`}>
            <span className="give-tag">{cat.tag}</span>
            <h3>{cat.title}</h3>
            
            <div className="scripture-box">
              <p className="scripture-text">"{cat.scripture}"</p>
              <p className="scripture-ref">— {cat.reference}</p>
            </div>

            <p className="give-desc">{cat.desc}</p>
            
            <div className="divider"></div>
            
            <span className="method-label">SELECT PAYMENT METHOD</span>
            <div className="platform-list">
              <button className="platform-btn cashapp">Give via Cash App</button>
              <button className="platform-btn paypal">Give via PayPal</button>
              <button className="platform-btn chime">Give via Chime</button>
              <button className="platform-btn apple">Give via Apple Pay</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GiveModal;