import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const { pathname } = useLocation();

  return (
    <nav className="navbar">
      <picture className="containerLogo">
        <img
          className="logo"
          src="https://1000logos.net/wp-content/uploads/2021/10/logo-Meta.png"
          alt=""
        />
      </picture>
      <ul>
        <li className={pathname === "/" ? "active" : ""}>
          <Link to="/">Home</Link>
        </li>
        <li className={pathname === "/create-country" ? "active" : ""}>
          <Link to="/create-country">Create Country</Link>
        </li>
        <li className={pathname === "/manage-country" ? "active" : ""}>
          <Link to="/manage-country">Manage Country</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
