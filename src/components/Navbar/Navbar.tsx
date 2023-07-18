import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross1 } from "react-icons/rx";
import logo from "../../assets/logo.jpg";
import "../Navbar/Navbar.scss";

const Navbar = () => {
  const [active, setActive] = useState<boolean>(false);

  const showMenu = () => {
    setActive(!active);
  };

  return (
    <nav className="nav">
      <img className="nav__logo" src={logo} alt="chodz na ciacho" />

      <ul
        className={
          active
            ? "nav__list nav__list--open text-center m-0 p-0"
            : "nav__list text-center m-0 p-0"
        }
      >
        <li>
          <a href="/">O mnie</a>
          </li>
        <li><a href="/">Oferta</a></li>
        <li><a href="/">Kontakt</a></li>
      </ul>
      <button className="nav__hamburger" onClick={showMenu}>
        {active ? (
          <RxCross1 className="w-100 h-100" />
        ) : (
          <RxHamburgerMenu className="w-100 h-100" />
        )}
      </button>
    </nav>
  );
};

export default Navbar;
