import React, { useState } from "react";
import Navlink from "../Navlink/Navlink";
import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross1 } from "react-icons/rx";
import logo from "../../assets/logo.jpg";
import ExtraContent from "../ExtraContent/ExtraContent";
import "../Navbar/Navbar.scss";

const Navbar = () => {
  const [active, setActive] = useState<boolean>(false);

  const showMenu = () => {
    setActive(!active);
  };

  return (
    <nav className={active ? "nav nav__open" : "nav"}>
       <ExtraContent />
      <Link to="/">
        <img className="nav__logo" src={logo} alt="chodz na ciacho" />
      </Link>

      <ul
        className={
          active
            ? "nav__list nav__list--open text-center"
            : "nav__list text-center"
        }
      >
        <Navlink linkName="O nas" link="/" />
        <Navlink linkName="Torty" link="/cakes" />
        <Navlink linkName="Wesela" link="/wedding" />
        <Navlink linkName="Słodki stół" link="/sweetTable" />
        <Navlink linkName="Kontakt" link="/contact" />
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
