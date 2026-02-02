import './App.css';
import Navbar from './components/NavBar';


function App() {

  return (
    <div className="App">
      <Navbar />
      <main style={{ padding: '40px' }}>
        <h1>Welcome Home</h1>
        <p>Join us this Friday or Saturday.</p>
      </main>

    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Welcome to CTGL Site</h1>
      <p>Your journey with Grace starts here.</p>
      <button onClick={() => alert('Coming soon!')}>Learn More</button>
    </div>
    </div>
  );
}

export default App;