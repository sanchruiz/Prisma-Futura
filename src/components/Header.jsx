import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    // Verificar estado inicial al montar
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <nav className="nav-container" aria-label="Navegación principal">
        <NavLink to="/" className="logo" aria-label="Prisma Futura">
          <img src="/img/ultimate_logo.png" alt="Logotipo Prisma Futura" />
        </NavLink>
        <ul className="nav-menu">
          <li>
            <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>
              Inicio
            </NavLink>
          </li>
          <li>
            <NavLink to="/nosotros" className={({ isActive }) => (isActive ? 'active' : '')}>
              Nosotros
            </NavLink>
          </li>
          <li>
            <NavLink to="/servicios" className={({ isActive }) => (isActive ? 'active' : '')}>
              Servicios
            </NavLink>
          </li>
          <li>
            <NavLink to="/equipo" className={({ isActive }) => (isActive ? 'active' : '')}>
              Equipo
            </NavLink>
          </li>
          <li>
            <NavLink to="/contacto" className="contact-link">
              Contacto
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
