import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import "../styles/header.css";

export default function Header() {
  return (
    <header className="header">
      <div className="header__logo">
        <img src={logo} alt="Streamwave Logo" className="header__logo-image" />
        <h1 className="header__title">Streamwave</h1>
      </div>
      <nav className="header__nav">
        <Link className="header__nav-item" to="/">
          Inicio
        </Link>
        <Link className="header__nav-item" to="/rentals">
          Alquileres
        </Link>
        <Link className="header__nav-item" to="/purchases">
          Compras
        </Link>
      </nav>
    </header>
  );
}
