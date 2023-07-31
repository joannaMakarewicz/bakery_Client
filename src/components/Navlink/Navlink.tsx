import React from "react";
import { NavLink } from "react-router-dom";
import "../Navlink/Navlink.scss";

type NavlinkProps = {
    link: string,
    linkName: string
}

const Navlink = ({link, linkName}:NavlinkProps) => {
  return (
    <li className="mainNavbar__link">
      <NavLink
        className={({ isActive }) => (isActive ? "active" : "inactive")}
        to={link}
      >
        {linkName}
      </NavLink>
    </li>
  );
};

export default Navlink;