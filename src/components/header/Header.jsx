import './header.scss'
import Logo from '/assets/LOGO.png?url';
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="header section">
      <div className="header__logo">
        <NavLink
          to={'/'}
        >
          <img src={Logo} alt="Brand logo" />
        </NavLink>
      </div>

      <nav className="header__nav">
        <ul>
          <li>
            <NavLink
              to={'/'}
              className="header__nav-link"
            >
              Accueil
            </NavLink>
          </li>
          <li>
            <NavLink
              to={'/about'}
              className="header__nav-link"
            >
              A Propos
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
