import "./Footer.css";
import { FaGithub, FaDiscord, FaWhatsapp, FaLinkedin } from "react-icons/fa";

function FooterBar() {
  return (
    <footer className="rodape">
      <div className="quem-sou">
        <h2>Kaio Melo</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat ea ad
          quod neque sit voluptate facere, impedit hic, corporis eveniet
          dolorum, corrupti blanditiis officiis laboriosam doloribus
          consequuntur suscipit ducimus et.
        </p>
      </div>
      <div className="redes-sociais">
        <h2>Redes Sociais</h2>
        <a href="#" className="icone-rede-social">
          <span><FaGithub/></span>
        </a>
        <a href="#" className="icone-rede-social">
          <span><FaLinkedin/></span>
        </a>
        <a href="#" className="icone-rede-social">
          <span><FaDiscord/></span>
        </a>
        <a href="#" className="icone-rede-social">
          <span><FaWhatsapp/></span>
        </a>
      </div>
      <div className="linha-container">
        <hr className="linha" />
      </div>
      <div className="criador">
        <p>
          © Copyright 2023. Feito por <strong>Kaio Melo</strong>
        </p>
      </div>
    </footer>
  );
}

export default FooterBar;
