import "./Footer.css";
import discord from '../../assets/img/discord.svg'
import whatsapp from '../../assets/img/whatsapp.svg'
import linkedin from '../../assets/img/linkedin.svg'
import github from '../../assets/img/github.svg'

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
          <img src={linkedin} alt="Ícone 1" />
        </a>
        <a href="#" className="icone-rede-social">
          <img src={discord} alt="Ícone 2" />
        </a>
        <a href="#" className="icone-rede-social">
          <img src={whatsapp} alt="Ícone 3" />
        </a>
        <a href="#" className="icone-rede-social">
          <img src={github} alt="Ícone 4" />
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
