import './Header.css'
import { Link } from 'react-router-dom';

function NavBar(){
    return(
        <header>
            <div className="logoName">
                <h2>Kaio Melo</h2>
            </div>
            <nav className="navbar">
                <ul>
                    <Link to='/' className='active'>Início</Link>
                    <Link to=''>Sobre Mim</Link>
                    <Link to=''>Projetos</Link>
                    <Link to=''>Contatos</Link>
                </ul>
            </nav>
        </header> 
    )
}

export default NavBar;