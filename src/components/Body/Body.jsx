import './Body.css'

import Home from '../../pages/Home';
import SobreMin from '../../pages/SobreMin';
import Projetos from '../../pages/Projetos';

function Body(){
    return(
        <body className='container'>
            <Home/>
            <SobreMin/>
            <Projetos/>
        </body>
    )
}

export default Body;