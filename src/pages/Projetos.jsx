import "./Projetos.css";

import imgProjeto from "../assets/img/projeto01.png";

function Projetos() {
  return (
    <section className="projetos">
      <h2 className="titulo">Projetos</h2>
      <div className="box-projetos">
        <div className="card">
          <img src={imgProjeto} alt="" />
          <div className="descricao">
            <h3>Gerenciamento de Veículos</h3>
            <p>
              Projeto em desenvolvimento utilizando JavaFX, MySQL, JavaDOC,
              Maven, JUnit e boas práticas pqara gerenciamento de controle de
              viaturas.
            </p>
            <button className="button-projeto"><a href="">Visitar Projeto</a></button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projetos;
