import "./Habilidades.css";

import { GoCode, GoBrowser, GoDatabase, GoGear, GoGitMerge, GoCloud, GoVerified, GoDeviceDesktop, GoIssueDraft, GoMail, GoCommandPalette, GoContainer } from "react-icons/go";

function Habilidades(){
    return (
      <section className="habilidades">
        <h2 className="titulo">Habilidades</h2>
        <div className="box-icons">
          <div className="box">
            <span className="icon"><GoCode/></span>
            <p className="titulo-box">Linguagem</p>
            <ul className="info">
              <li>Java</li>
              <li>JavaScript</li>
            </ul>
          </div>
          <div className="box">
            <span className="icon"><GoBrowser/></span>
            <p className="titulo-box">Framework</p>
            <ul className="info">
              <li>Spring Framework</li>
              <li>React</li>
            </ul>
          </div>
          <div className="box">
            <span className="icon"><GoDatabase/></span>
            <p className="titulo-box">Banco de Dados</p>
            <ul className="info">
              <li>MySQL</li>
              <li>PostgreSQL</li>
            </ul>
          </div>
          <div className="box">
            <span className="icon"><GoGear/></span>
            <p className="titulo-box">APIs</p>
            <ul className="info">
              <li>REST</li>
              <li>JSON</li>
            </ul>
          </div>
          <div className="box">
            <span className="icon"><GoGitMerge/></span>
            <p className="titulo-box">Versionamento</p>
            <ul className="info">
              <li>Git</li>
            </ul>
          </div>
          <div className="box">
            <span className="icon"><GoCloud/></span>
            <p className="titulo-box">Microserviços</p>
          </div>
          <div className="box">
            <span className="icon"><GoVerified/></span>
            <p className="titulo-box">Boas Práticas</p>
            <ul className="info">
              <li>JUnit</li>
              <li>Mockito</li>
              <li>Swagger</li>
            </ul>
          </div>
          <div className="box">
            <span className="icon"><GoDeviceDesktop/></span>
            <p className="titulo-box">IDEA</p>
            <ul className="info">
              <li>Eclipse</li>
              <li>Intellij</li>
              <li>VSCode</li>
            </ul>
          </div>
          <div className="box">
            <span className="icon"><GoIssueDraft/></span>
            <p className="titulo-box">Metodologia Ágeis</p>
            <ul className="info">
              <li>Scrum</li>
            </ul>
          </div>
          <div className="box">
            <span className="icon"><GoMail/></span>
            <p className="titulo-box">Mensageria</p>
          </div>
          <div className="box">
            <span className="icon"><GoCommandPalette/></span>
            <p className="titulo-box">Terminal</p>
            <ul className="info">
              <li>Bash</li>
              <li>PowerShell</li>
              <li>Wsl</li>
            </ul>
          </div>
          <div className="box">
            <span className="icon"><GoContainer/></span>
            <p className="titulo-box">Containers</p>
          </div>
        </div>
      </section>
    );
}

export default Habilidades;
