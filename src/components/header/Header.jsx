import './header.scss'
import Logo from '../../../public/assets/LOGO.png';
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <div className="header__logo">
        <img src={Logo} alt="Brand logo" />
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
              A propos
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
