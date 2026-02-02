import React from 'react';
import '../styles/App.css'; 

const ServiceSchedule = () => {
  return (
    <div className="schedule-container">
      <h2 className="schedule-title">Weekly Worship Schedule</h2>
      <p className="schedule-subtitle">Join us as we celebrate the Sabbath together.</p>
      
      <div className="schedule-grid">
        
        {/* Card 1: Wednesday */}
        <div className="schedule-card">
          <div className="day-tag">WEDNESDAY</div>
          <h3>Prayer Service</h3>
          <p className="time">6:30 PM — 7:00 PM</p>
          <p className="desc">A sacred call to prayer and intercession.</p>
          
          <div className="divider"></div>
          
          <div className="day-tag">BIBLE CLASS</div>
          <h3>Scripture Study</h3>
          <p className="time">7:00 PM — 8:00 PM</p>
          <p className="desc">Diving deep into the Word of God.</p>
        </div>

        {/* Card 2: Friday */}
        <div className="schedule-card">
          <div className="day-tag">FRIDAY</div>
          <h3>Sunset Vespers</h3>
          <p className="time">Begins at 7:30 PM</p>
          <p className="desc">A time of song and prayer to welcome the Sabbath. A Holy Ghost filled night.</p>
        </div>

        {/* Card 3: Saturday (Active Sabbath Card) */}
        <div className="schedule-card active-day">
          <div className="day-tag">SATURDAY</div>
          <h3>Sabbath School</h3>
          <p className="time">10:00 AM — 12:00 PM</p>
          <p className="desc">Interactive Bible study groups for all ages.</p>
          
          <div className="divider"></div>
          
          <h3>Worship Service</h3>
          <p className="time">2:30 PM — Benediction</p>
          <p className="desc">Our main worship and word service.</p>
        </div>

      </div>
    </div>
  );
};

export default ServiceSchedule;