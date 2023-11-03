import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Wrapper from '../assets/wrappers/Navbar';
import logo from '../assets/sma.png';
import hamburger from '../assets/hamburger.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Wrapper>
      <div className={`nav-center ${isMenuOpen ? 'menu-open' : ''}`}>
        <span className="logo">
          <img className="logo sekolah" src={logo} alt="" />
        </span>
        <div className={`nav-links ${isMenuOpen ? 'show-links' : ''}`}>
          <NavLink to="/" className="nav-link">
            Home
          </NavLink>
          <NavLink to="/Profile" className="nav-link">
            Profile
          </NavLink>
          <NavLink to="/Guru & Tendik" className="nav-link">
            Guru & Tendik
          </NavLink>
          <NavLink to="/news" className="nav-link">
            News
          </NavLink>
        </div>
        <div className="hamburger-icon" onClick={toggleMenu}>
          <img className="hamburger" src={hamburger} alt="Menu" />
        </div>
      </div>
    </Wrapper>
  );
};

export default Navbar;