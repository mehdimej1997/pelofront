import React from "react";
import { NavLink, Link } from "react-router-dom";
import logo from "../../assets/img/logo.png";

function NavbarComputer() {
  return (
    <>
      <header className={`border-b border-gray-700`}>
        <nav className="flex justify-between h-24 items-center ml-10 mr-10">
          <Link to={"/"} className="logo">
            <img src={logo} alt="ayoub moustakfi" className="h-32 w-32" />
          </Link>
          <ul className="nav-links flex gap-6">
            <li>
              <NavLink
                to="/"
                className="hover:text-gray-100 text-gray-300 tracking-wider"
              >
                HOME
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className="hover:text-gray-100 text-gray-300 tracking-wider"
              >
                ABOUT ME
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/portfolio"
                className="hover:text-gray-100 text-gray-300 tracking-wider"
              >
                PORTFOLIO
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className="hover:text-gray-100 text-gray-300 tracking-wider"
              >
                CONTACT
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default NavbarComputer;
