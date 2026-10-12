import logo from "../assets/pigz-logotipo-colorido.svg";
import appStore from "../assets/selo-app-store.svg";
import googlePlay from "../assets/selo-google-play.svg";
import iconSuporte from "../assets/icone-fale-conosco.svg";
import linkedin from "../assets/linkedin-with-circle.svg";
import instagram from "../assets/instagram-with-circle.svg";
import facebook from "../assets/facebook-with-circle.svg";
import youtube from "../assets/youtube-with-circle.svg";
import orangeLabs from "../assets/logo-orange-horizontal-branco.svg";
import "./Footer.css";

const APP_STORE_URL = "https://apps.apple.com/us/app/pigz/id1526557835";
const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=app.pigz.mart&hl=pt-BR&pli=1";

const SOCIALS = [
  { name: "LinkedIn", icon: linkedin },
  { name: "Instagram", icon: instagram },
  { name: "Facebook", icon: facebook },
  { name: "YouTube", icon: youtube },
];

export default function Footer() {
  return (
    <footer className="footer">
      <img src={logo} alt="Pigz" className="footer__logo" />
      <p className="footer__tag">Tudo que você precisa.</p>

      <h4>Baixe o APP</h4>
      <div className="footer__stores">
        <a href={APP_STORE_URL} target="_blank" rel="noreferrer">
          <img src={appStore} alt="Baixar na App Store" />
        </a>
        <a href={PLAY_STORE_URL} target="_blank" rel="noreferrer">
          <img src={googlePlay} alt="Disponível no Google Play" />
        </a>
      </div>

      <h4 className="footer__group">Pigz</h4>
      <ul>
        <li>
          <a href="#">Sobre o Pigz</a>
        </li>
        <li>
          <a href="#">Portal do Parceiro</a>
        </li>
        <li>
          <a href="#">Quero ser um Pigz Partner</a>
        </li>
      </ul>

      <h4 className="footer__group footer__with-icon">
        <img src={iconSuporte} alt="" width={18} height={18} />
        Fale conosco
      </h4>
      <ul>
        <li>
          <a href="mailto:falecom@pigz.com.br">falecom@pigz.com.br</a>
        </li>
        <li>
          <a href="tel:+559532242603">(95) 3224-2603</a>
        </li>
      </ul>

      <h4 className="footer__group">Pigz nas redes</h4>
      <div className="footer__social">
        {SOCIALS.map((s) => (
          <a key={s.name} href="#" aria-label={s.name}>
            <img src={s.icon} alt="" />
          </a>
        ))}
      </div>

      <hr />
      <nav className="footer__legal">
        <a href="#">Nossos termos</a>
        <a href="#">Privacidade</a>
        <a href="#">Ajuda</a>
      </nav>

      <div className="footer__copy">
        <p>
          © Copyright 2021 • Pigz • Todos os direitos reservados. Orange Labs
          Tecnologia LTDA. CNPJ 34.895.008/0001-85
        </p>
        <img src={orangeLabs} alt="Orange Labs" className="footer__orange" />
      </div>
    </footer>
  );
}
