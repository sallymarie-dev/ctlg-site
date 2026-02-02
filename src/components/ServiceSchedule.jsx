import React from 'react';
import '../styles/App.css'; 

const ServiceSchedule = () => {
  return (
    <div className="schedule-container">
      <h2 className="schedule-title">Weekly Worship Schedule</h2>
      <p className="schedule-subtitle">Join us as we celebrate the Sabbath together.</p>
      
      <div className="schedule-grid">
        {/* Friday Service */}
        <div className="schedule-card">
          <div className="day-tag">FRIDAY</div>
          <h3>Sunset Vespers</h3>
          <p className="time">Begins at Sunset</p>
          <p className="desc">A quiet time of song and prayer to welcome the Sabbath.</p>
        </div>

        {/* Saturday Service */}
        <div className="schedule-card active-day">
          <div className="day-tag">SATURDAY</div>
          <h3>Sabbath School</h3>
          <p className="time">9:30 AM — 10:45 AM</p>
          <p className="desc">Interactive Bible study groups for all ages.</p>
          
          <div className="divider"></div>
          
          <h3>Worship Service</h3>
          <p className="time">11:00 AM — 12:30 PM</p>
          <p className="desc">Our main corporate worship and word.</p>
        </div>
      </div>
    </div>
  );
};

export default ServiceSchedule;