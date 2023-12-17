// NavBar.js
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header>
      <div className="logoName">
        <h2>Kaio Melo</h2>
      </div>
      <div className="menu-toggle" id="mobile-menu" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <nav className={`navbar ${menuOpen ? 'open' : ''}`}>
        <ul className="nav-list">
          <li>
            <Link to="/" className="active" onClick={toggleMenu}>
              Início
            </Link>
          </li>
          <li>
            <Link to="" onClick={toggleMenu}>
              Sobre Mim
            </Link>
          </li>
          <li>
            <Link to="" onClick={toggleMenu}>
              Projetos
            </Link>
          </li>
          <li>
            <Link to="" onClick={toggleMenu}>
              Contatos
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default NavBar;
