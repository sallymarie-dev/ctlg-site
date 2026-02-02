

const Navbar = ({ onGiveClick }) => {
  return (
    <nav className="navbar">
      <div className="nav-logo">
        <span className="logo-main">THE CHURCH OF THE LIVING GOD</span>
        <span className="logo-accent">PGOTT</span>
      </div>
      <ul className="nav-links">
        <li className="nav-item">Home</li>
        <li className="nav-item">About Us</li>
        <li className="nav-item">Sermons</li>
        <li className="nav-item" onClick={onGiveClick} style={{color: '#d4af37', fontWeight: 'bold'}}>Give</li>
      </ul>
    </nav>
  );
};

export default Navbar;