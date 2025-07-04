// src/components/Header.jsx
import { useState } from "react";
import NavBar from "./NavBar";
import logo from "../assets/logo.png";
import "../styles/header.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <header className="header">
      <div className="header__logo">
        <img src={logo} alt="Streamwave Logo" className="header__logo-image" />
        <h1 className="header__title">Streamwave</h1>
      </div>

      <button className="header__toggle" onClick={toggleMenu}>
        ☰
      </button>

      <NavBar isOpen={menuOpen} toggleMenu={toggleMenu} />
    </header>
  );
}
