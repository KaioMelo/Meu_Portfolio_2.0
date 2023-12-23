import "./SobreMin.css";

import foto from "../assets/img/Foto-Perfil.png"

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
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Obcaecati, omnis? Quod magni nostrum a, recusandae corporis
              repellendus placeat sed voluptatum ut, libero rerum possimus.
              Illum optio porro excepturi sed culpa. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Aliquid beatae autem suscipit ipsam
              dolorem voluptatibus amet expedita vero, voluptatum provident
              nesciunt, cum deleniti nemo repellat molestiae corporis quas eum
              non!
            </p>
          </div>
        </div>
      </div>
      <div className="habilidades">
          <h3 className="subtitulo-habilidade">Habilidades</h3>
          <div className="box-icons">
            <div className="icon">
              <i className="devicon-java-plain"></i>
              <div className="descricao">
                <p>Java</p>
              </div>
            </div>
            <div className="icon">
              <i className="devicon-spring-plain"></i>
              <div className="descricao">
                <p>Spring Boot</p>
              </div>
            </div>
            <div className="icon">
              <i className="devicon-mysql-plain"></i>
              <div className="descricao">
                <p>MySQL</p>
              </div>
            </div>
            <div className="icon">
              <i className="devicon-postgresql-plain"></i>
              <div className="descricao">
                <p>PostegreSQL</p>
              </div>
            </div>
            <div className="icon">
              <i className="devicon-git-plain"></i>
              <div className="descricao">
                <p>Git</p>
              </div>
            </div>
            <div className="icon">
              <i className="devicon-intellij-plain"></i>
              <div className="descricao">
                <p>Intellij</p>
              </div>
            </div>
            <div className="icon">
              <i className="devicon-linux-plain"></i>
              <div className="descricao">
                <p>Linux</p>
              </div>
            </div>
            <div className="icon">
              <i className="devicon-tomcat-line"></i>
              <div className="descricao">
                <p>Tomcat</p>
              </div>
            </div>
          </div>
        </div>
    </section>
  );
}

export default SobreMin;
