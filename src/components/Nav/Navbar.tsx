import "./navbar.scss";
import { ReactComponent as LogoIcon } from "../../assets/icon/logo.svg";
import { ReactComponent as Burger } from "../../assets/icon/burger.svg";

export const Navbar = () => {
  return (
    <div className="navbar__wrap">
      <div className="navbar__logo--wrap">
        <LogoIcon />
      </div>
      <nav className="navbar__navigation">
        <a href="#" className="navbar__navigation-link">
          Features
        </a>
        <a href="#" className="navbar__navigation-link">
          Partners
        </a>
        <a href="#" className="navbar__navigation-link">
          Stories
        </a>
      </nav>
      <button className="navbar__button">
        <span className="navbar__batton-text">Download for free</span>
      </button>
      <button className="navbar__burger">
        <Burger />
      </button>
    </div>
  );
};
