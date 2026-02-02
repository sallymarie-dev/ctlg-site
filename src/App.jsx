import React, { useState } from 'react'; 
import './styles/App.css';
import Navbar from './components/NavBar';
import SabbathStatus from './components/SabbathStatus'; 
import ServiceSchedule from './components/ServiceSchedule';
import GiveModal from './components/GiveModal';

function App() {
  const [showSchedule, setShowSchedule] = useState(false);
  const [showGive, setShowGive] = useState(false);

  return (
    <div className="app-viewport">
      <Navbar onGiveClick={() => setShowGive(true)} />
      
      <main className="hero-section">
        <div className="hero-overlay">
          <div className="hero-content">
            <h1 className="hero-title">
              Welcome to <br />
              <span className="church-name-main">The Church of The Living God</span>
              <span className="hero-subtitle">The Pillar and Ground of the Truth</span>
            </h1>
            
            <p className="hero-description">
              Your journey with Grace starts here.
            </p>

            <div className="status-button-wrapper" onClick={() => setShowSchedule(true)}>
              <SabbathStatus />
            </div>

            <div className="cta-simple">
              <button className="ghost-btn" onClick={() => setShowSchedule(true)}>
                View Full Weekly Schedule
              </button>
            </div>
          </div>
        </div>
      </main>

      {showSchedule && (
        <div className="modal-overlay" onClick={() => setShowSchedule(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setShowSchedule(false)}>&times;</button>
            <ServiceSchedule />
          </div>
        </div>
      )}

{showGive && (
        <div className="modal-overlay" onClick={() => setShowGive(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setShowGive(false)}>&times;</button>
            <GiveModal />
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