import "./Home.css";

function Home() {
  return (
    <section className="home">
      <h1 className="titulo-principal">Olá,</h1>
      <h1 className="titulo-principal">Meu nome Kaio Melo </h1>
      <h2 className="sub-titulo">Desenvolvedor Back-end</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, eius
        perferendis dolorum quas nostrum quae sint tempora sit repellat, dicta
        nesciunt molestias sequi assumenda earum itaque odit ad exercitationem
        maxime!
      </p>
      <div className="box-botoes">
        <button id="btn-ola">Diga Olá</button>
        <button id="btn-donwload">Donwload CV</button>
      </div>
    </section>
  );
}

export default Home;
