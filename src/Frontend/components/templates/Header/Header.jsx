import './Header.css'
import './Script.js'
import { Link } from 'react-router-dom';

function NavBar(){
    return(
        <header> 
            <div className="logoName">
                <h2>Kaio Melo</h2>
            </div>
            <div className="menu-toggle" id="mobile-menu">
                <span></span>
                <span></span>
                <span></span>
            </div>
            <nav className="navbar">
                <ul className="nav-list">
                    <li><a><Link to='/' className='active'>Início</Link></a></li>
                    <li><a><Link to=''>Sobre Mim</Link></a></li>
                    <li><a><Link to=''>Projetos</Link></a></li>
                    <li><a> <Link to=''>Contatos</Link></a></li>
                </ul>
            </nav>
        </header> 
    )
}

export default NavBar;