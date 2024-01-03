import './Body.css'

import Home from '../../pages/Home';
import SobreMin from '../../pages/SobreMin';
import Habilidades from '../../pages/Habilidades';
import Projetos from '../../pages/Projetos';

function Body(){
    return(
        <body className='container'>
            <Home/>
            <SobreMin/>
            <Habilidades/>
            <Projetos/>
        </body>
    )
}

export default Body;