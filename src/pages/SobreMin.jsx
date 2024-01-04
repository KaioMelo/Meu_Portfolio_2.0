import "./SobreMin.css";

import foto from "../assets/img/Foto-Perfil.png";

function SobreMin() {
  return (
    <section className="sobreMin">
      <div className="cabecalho">
        <h2 className="titulo">Sobre Mim</h2>
        <p className="subtitulo">Lorem !</p>
      </div>
      <div className="box-sobremim">
        <div className="foto-perfil">
          <img src={foto} alt="" />
        </div>
        <div className="resumo">
          <h3 className="subtitulo-resumo">Me conheça!</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati,
            omnis? Quod magni nostrum a, recusandae corporis repellendus placeat
            sed voluptatum ut, libero rerum possimus. Illum optio porro
            excepturi sed culpa. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Aliquid beatae autem suscipit ipsam dolorem
            voluptatibus amet expedita vero, voluptatum provident nesciunt, cum
            deleniti nemo repellat molestiae corporis quas eum non!
          </p>
        </div>
      </div>
    </section>
  );
}

export default SobreMin;
