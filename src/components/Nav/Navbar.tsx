import "./navbar.scss";
import { ReactComponent as LogoIcon } from "../../assets/icon/logo.svg";
import { ReactComponent as Burger } from "../../assets/icon/burger.svg";

export const Navbar = () => {
  return (
    <nav className="navbar">

        <LogoIcon />

      <div className="navbar__list">
        <a href="#" className="navbar__link">
          Features
        </a>
        <a href="#" className="navbar__link">
          Partners
        </a>
        <a href="#" className="navbar__link">
          Stories
        </a>
      </div>
      <button className="navbar__button">Download for free
      </button>
      <button className="navbar__burger">
        <Burger />
      </button>
    </nav>
  );
};
