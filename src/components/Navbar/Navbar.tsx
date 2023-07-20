import React, { useState } from "react";
import Navlink from "../Navlink/Navlink";
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
        <Navlink linkName="O mnie" link="#offer" />
        <Navlink linkName="Oferta" link="/" />
        <Navlink linkName="Kontakt" link="/" />
      </ul>
      <button
        className={
          active ? " nav__hamburger nav__hamburger--close" : "nav__hamburger"
        }
        onClick={showMenu}
      >
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
