import { useState } from "react";
import "../../assets/Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">

        <a href="#home" className="navbar-logo" onClick={closeMenu}>
          Shubham<span>.Dev</span>
        </a>

        <button
          className={`menu-toggle ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`navbar-menu ${menuOpen ? "active" : ""}`}>
          <li>
            <a href="#home" onClick={closeMenu}>Home</a>
          </li>

          <li>
            <a href="#about" onClick={closeMenu}>About</a>
          </li>

          <li>
            <a href="#skills" onClick={closeMenu}>Skills</a>
          </li>

          <li>
            <a href="#experience" onClick={closeMenu}>Experience</a>
          </li>

          <li>
            <a href="#projects" onClick={closeMenu}>Projects</a>
          </li>

          <li>
            <a href="#certifications" onClick={closeMenu}>
              Certifications
            </a>
          </li>

          <li>
            <a href="#contact" onClick={closeMenu}>Contact</a>
          </li>
        </ul>

        <a href="#contact" className="navbar-button">
          Let's Talk
        </a>

      </div>
    </nav>
  );
}

export default Navbar;