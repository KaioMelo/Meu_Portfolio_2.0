import { useState } from 'react';
import { Link } from 'react-router-dom';
import discord from '../../assets/img/discord.svg'
import whatsapp from '../../assets/img/whatsapp.svg'
import linkedin from '../../assets/img/linkedin.svg'
import github from '../../assets/img/github.svg'
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
      <div className="redes-sociais">
        <a href="#" className="icone-rede-social">
          <img src={linkedin} alt="Ícone 1" />
        </a>
        <a href="#" className="icone-rede-social">
          <img src={discord} alt="Ícone 2" />
        </a>
        <a href="#" className="icone-rede-social">
          <img src={whatsapp} alt="Ícone 3" />
        </a>
        <a href="#" className="icone-rede-social">
          <img src={github} alt="Ícone 4" />
        </a>
      </div>
      <div className="menu-toggle" id="mobile-menu" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </header>
  );
}

export default NavBar;
