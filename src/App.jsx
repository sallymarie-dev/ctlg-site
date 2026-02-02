import './styles/App.css';
import Navbar from './components/NavBar';
import SabbathStatus from './components/SabbathStatus'; 

function App() {
  return (
    <div className="App">
      
      <Navbar />
      <SabbathStatus />
      <main style={{ padding: '40px', textAlign: 'center' }}>
        <h1 style={{ fontSize: '48px', marginBottom: '16px' }}>Welcome to The Church of The Living God the Pillar and Ground of the Truth</h1>
        <p style={{ fontSize: '20px', color: '#555555', marginBottom: '24px' }}>
          Your journey with Grace starts here.
        </p>
        
        <div style={{ padding: '20px', backgroundColor: '#f9f9f9', borderRadius: '8px', maxWidth: '600px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '24px' }}>Worship With Us</h2>
          <p>Join us this Friday evening or Saturday morning for rest and fellowship.</p>
          <button 
            style={{ marginTop: '10px' }} 
            onClick={() => alert('Our service starts at 11:00 AM every Saturday!')}
          >
            Service Times
          </button>
        </div>
      </main>

      <footer style={{ marginTop: '100px', padding: '40px', borderTop: '1px solid #eee', textAlign: 'center', fontSize: '14px', color: '#888' }}>
        © {new Date().getFullYear()} The Church of The Living God PGOTT - A Sabbath Keeping Community
      </footer>
    </div>
  );
}

export default App;