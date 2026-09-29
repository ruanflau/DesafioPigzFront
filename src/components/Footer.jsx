import Placeholder from './Placeholder'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      {/* logo.svg */}
      <Placeholder label="logo" width={54} height={26} />
      <p className="footer__tag">Tudo que você precisa.</p>

      <h4>Baixe o APP</h4>
      <div className="footer__stores">
        {/* app-store.svg / google-play.svg */}
        <Placeholder label="App Store" width={60} height={20} />
        <Placeholder label="Google Play" width={68} height={20} />
      </div>

      <h4 className="footer__group">Pigz</h4>
      <ul>
        <li><a href="#">Sobre o Pigz</a></li>
        <li><a href="#">Portal do Parceiro</a></li>
        <li><a href="#">Quero ser um Pigz Partner</a></li>
      </ul>

      <h4 className="footer__group footer__with-icon">
        {/* icon-suporte.svg */}
        <Placeholder label="" width={16} height={16} /> Fale conosco
      </h4>
      <ul>
        <li><a href="mailto:falecom@pigz.com.br">falecom@pigz.com.br</a></li>
        <li><a href="tel:+559532242603">(95) 3224-2603</a></li>
      </ul>

      <h4 className="footer__group">Pigz nas redes</h4>
      <div className="footer__social">
        {/* icon-linkedin/instagram/facebook/youtube.svg */}
        {['in', 'ig', 'fb', 'yt'].map((s) => (
          <a key={s} href="#" aria-label={s}><span>{s}</span></a>
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
          © Copyright 2021 • Pigz • Todos os direitos reservados. Orange Labs Tecnologia LTDA. CNPJ 34.895.008/0001-85
        </p>
        {/* orange-labs.svg */}
        <Placeholder label="orange" width={52} height={20} />
      </div>
    </footer>
  )
}
