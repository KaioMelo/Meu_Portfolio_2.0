import "./Habilidades.css";

import { GoCode, GoBrowser, GoDatabase, GoGear, GoGitMerge, GoCloud, GoVerified, GoDeviceDesktop, GoIssueDraft, GoMail, GoCommandPalette, GoContainer } from "react-icons/go";

function Habilidades(){
    return (
      <section className="habilidades">
        <h2 className="titulo">Habilidades</h2>
        <div className="box-icons">
          <div className="box">
            <span className="icon"><GoCode/></span>
            <h3 className="titulo-box">Linguagem</h3>
            <ul className="info">
              <li>Java</li>
              <li>JavaScript</li>
            </ul>
          </div>
          <div className="box">
            <span className="icon"><GoBrowser/></span>
            <h3 className="titulo-box">Framework</h3>
            <ul className="info">
              <li>Spring Framework</li>
              <li>React</li>
            </ul>
          </div>
          <div className="box">
            <span className="icon"><GoDatabase/></span>
            <h3 className="titulo-box">Banco de Dados</h3>
            <ul className="info">
              <li>MySQL</li>
              <li>PostgreSQL</li>
            </ul>
          </div>
          <div className="box">
            <span className="icon"><GoGear/></span>
            <h3 className="titulo-box">APIs</h3>
            <ul className="info">
              <li>REST</li>
              <li>JSON</li>
            </ul>
          </div>
          <div className="box">
            <span className="icon"><GoGitMerge/></span>
            <h3 className="titulo-box">Versionamento</h3>
            <ul className="info">
              <li>Git</li>
            </ul>
          </div>
          <div className="box">
            <span className="icon"><GoCloud/></span>
            <h3 className="titulo-box">Microservices</h3>
          </div>
          <div className="box">
            <span className="icon"><GoVerified/></span>
            <h3 className="titulo-box">Boas Práticas</h3>
            <ul className="info">
              <li>Testes unitários (JUnit)</li>
              <li>Documentação (Swagger)</li>
            </ul>
          </div>
          <div className="box">
            <span className="icon"><GoDeviceDesktop/></span>
            <h3 className="titulo-box">IDEA</h3>
            <ul className="info">
              <li>Eclipse</li>
              <li>Intellij</li>
              <li>VSCode</li>
            </ul>
          </div>
          <div className="box">
            <span className="icon"><GoIssueDraft/></span>
            <h3 className="titulo-box">Metodologia Ágeis</h3>
            <ul className="info">
              <li>Scrum</li>
            </ul>
          </div>
          <div className="box">
            <span className="icon"><GoMail/></span>
            <h3 className="titulo-box">Mensageria</h3>
          </div>
          <div className="box">
            <span className="icon"><GoCommandPalette/></span>
            <h3 className="titulo-box">Terminal</h3>
            <ul className="info">
              <li>Bash</li>
              <li>PowerShell</li>
              <li>Wsl</li>
            </ul>
          </div>
          <div className="box">
            <span className="icon"><GoContainer/></span>
            <h3 className="titulo-box">Containers</h3>
          </div>
        </div>
      </section>
    );
}

export default Habilidades;
