import './Home.css'

function Home(){
    return(
        <section className="home">
            <h1 className="titulo-principal">Olá,</h1>
            <h1 className="titulo-principal">Meu nome Kaio Melo </h1>  
            <p className='sub-titulo'>Desenvolvedor Back-end</p> 
            <div className='box-botoes'>
                <button id='btn-ola'>Diga Olá</button>
                <button id='btn-donwload'>Donwload CV</button>
            </div>
        </section>
    )
}

export default Home;