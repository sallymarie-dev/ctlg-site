const Navbar = ({ onGiveClick }) => {
  return (
    <nav className="navbar">
      <div className="nav-logo">
        THE CHURCH OF THE LIVING GOD <span className="logo-accent">PGOTT</span>
      </div>
      <ul className="nav-links">
        <li className="nav-item">Home</li>
        <li className="nav-item">About Us</li>
        <li className="nav-item">Sermons</li>
        
        <li className="nav-cta" onClick={onGiveClick} style={{cursor: 'pointer'}}>Give</li>
      </ul>
    </nav>
  );
};
export default Navbar;