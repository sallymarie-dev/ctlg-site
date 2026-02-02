import React, { useState } from 'react'; 
import './styles/App.css';
import Navbar from './components/NavBar';
import SabbathStatus from './components/SabbathStatus'; 
import ServiceSchedule from './components/ServiceSchedule';

function App() {
  const [showSchedule, setShowSchedule] = useState(false);

  return (
    <div className="App">
      <Navbar />
      <SabbathStatus />
      
      <main className="main-content">
        <h1 className="hero-title">
          Welcome to The Church of The Living God <br />
          <span className="hero-subtitle">the Pillar and Ground of the Truth</span>
        </h1>
        
        <p className="hero-description">
          Your journey with Grace starts here.
        </p>

        <div className="cta-section">
          <h2 className="cta-title">Worship With Us</h2>
          <p className="cta-text">Join us this Friday evening or Saturday morning for rest and fellowship.</p>
          
          <button 
            className="service-times-btn" 
            onClick={() => setShowSchedule(true)}
          >
            Service Times
          </button>
        </div>
      </main>

      {showSchedule && (
        <div className="modal-overlay" onClick={() => setShowSchedule(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setShowSchedule(false)}>×</button>
            <ServiceSchedule />
          </div>
        </div>
      )}

      <footer className="site-footer">
        © {new Date().getFullYear()} The Church of The Living God PGOTT - A Sabbath Keeping Community
      </footer>
    </div>
  );
}

export default App;