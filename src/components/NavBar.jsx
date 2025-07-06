import { Link } from "react-router-dom";
import "../styles/navbar.css";

export default function NavBar({ isOpen, toggleMenu }) {
  return (
    <nav className={`nav ${isOpen ? "nav--open" : ""}`}>
      <Link className="nav__item" to="/" onClick={toggleMenu}>
        Inicio
      </Link>
      <Link className="nav__item" to="/rentals" onClick={toggleMenu}>
        Mis Alquileres
      </Link>
      <Link className="nav__item" to="/purchases" onClick={toggleMenu}>
        Mis Compras
      </Link>
    </nav>
  );
}
