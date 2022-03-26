import React, { useState } from "react";
import logo from "../../assets/img/logo.png";
import menu from "../../assets/img/menu.png";
import { Link, NavLink } from "react-router-dom";
import "./NavMobile.scss";

function NavbarMobile() {
  const [isOpen, setIsOpen] = useState(false);

  const openMenuHandler = () => {
    setIsOpen(true);
  };
  return (
    <div className="flex justify-between items-center">
      <Link to={"/"} className="logo">
        <img src={logo} alt="ayoub moustakfi" className="h-32 w-32" />
      </Link>
      <div>
        <button className="w-9 mr-6" onClick={openMenuHandler}>
          <img src={menu} alt="" className="w-full" />
        </button>
      </div>
      <div
        className={`absolute h-screen w-screen bg-white z-50 ${
          isOpen ? "Down" : "Up"
        }`}
      >
        <ul className="nav-links items-center mt-20 flex gap-6 flex-col">
          <button
            onClick={() => setIsOpen(false)}
            className="text-gray-800 text-3xl raleway_font border-2 rounded-full w-12 h-12 active:bg-neutral-800 active:text-neutral-300 transition-all duration-300"
          >
            X
          </button>
          <li>
            <NavLink
              to="/"
              className="hover:text-gray-100 text-gray-800 tracking-wider text-3xl"
            >
              HOME
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className="hover:text-gray-100 text-gray-800 tracking-wider text-3xl"
            >
              ABOUT ME
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/portfolio"
              className="hover:text-gray-100 text-gray-800 tracking-wider text-3xl"
            >
              PORTFOLIO
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className="hover:text-gray-100 text-gray-800 tracking-wider text-3xl"
            >
              CONTACT
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavbarMobile;
