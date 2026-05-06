import { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [menuAbierto, setMenuAbierto] = useState(false);

  function toggleMenu() {
    setMenuAbierto(!menuAbierto);
  }

  function cerrarMenu() {
    setMenuAbierto(false);
  }

  return (
    <header className="header">

      <div className="logo">
        <h1>MediSupply</h1>
      </div>

      {/* BOTÓN HAMBURGUESA */}
      <button
  className="hamburger"
  onClick={toggleMenu}
  aria-label="Abrir menú"
  aria-expanded={menuAbierto}
>
  ☰
</button>

      {/* NAV */}
      <nav
  className={`nav ${menuAbierto ? "open" : ""}`}
  aria-label="Navegación principal"
>

        <Link to="/" onClick={cerrarMenu}>Inicio</Link>
        <Link to="/catalogo" onClick={cerrarMenu}>Catálogo</Link>
        <Link to="/about" onClick={cerrarMenu}>Sobre mí</Link>
        <Link to="/contacto" onClick={cerrarMenu}>Contacto</Link>
        <Link to="/cuenta" onClick={cerrarMenu}>Cuenta</Link>
        <Link to="/ayuda" onClick={cerrarMenu}>Ayuda</Link>
        <Link to="/carrito" onClick={cerrarMenu}>🛒</Link>

      </nav>

    </header>
  );
}

export default Header;