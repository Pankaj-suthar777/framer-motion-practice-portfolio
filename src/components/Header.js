import React from "react";

import Socials from "./Socials";
import Logo from "../img/header/logo.svg";
import MobileNav from "./MobileNav";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="fixed w-full px-[30px] lg:px-[100px] z-40 lg:h-[140px] flex items-center">
      <div className="flex flex-col lg:flex-row lg:items-center w-full justify-between">
        <Link to="/" className="max-w-[200px]">
          <img src={Logo} alt="" />
        </Link>
        <nav className="hidden xl:flex gap-x-12 font-semibold">
          <Link to="/" className="text-[#696c6d] hover:text-primary">
            Home
          </Link>
          <Link to="/about" className="text-[#696c6d] hover:text-primary">
            About
          </Link>
          <Link to="/portfolio" className="text-[#696c6d] hover:text-primary">
            Portfolio
          </Link>
          <Link to="/contact" className="text-[#696c6d] hover:text-primary">
            Contact
          </Link>
        </nav>
      </div>
      <Socials />
      <MobileNav />
    </div>
  );
};

export default Header;
