import logo from "../assets/Pigz Gestão - Logo.svg";
import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <img src={logo} alt="Pigz" width={56} height={28} />
      <a href="#" className="btn btn--small">
        Já sou parceiro
      </a>
    </header>
  );
}
