import React, { useState, useEffect } from "react";
// import components
import Nav from "../components/Nav";
import NavMobile from "../components/NavMobile";
import Socials from "../components/Socials";
const Header = () => {
  const [bg, setBg] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      return window.scrollY > 50 ? setBg(true) : setBg(false);
    });
  });

  return (
    <header
      className={`${
        bg ? "bg-tertiary h-20" : "h-24"
      } flex items-center fixed w-full z-10 top-0 text-white transition-all duration-300`}
    >
      <div className="container mx-auo h-full flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="text-2xl font-semibold">
          Nabil Maizou
        </a>
        {/* Nav */}
        <div className="hidden lg:block">
          <Nav />
        </div>
        {/* Socials */}
        <div className="hidden lg:block">
          <Socials />
        </div>
        {/* NavMobile */}
        <div className="lg:hidden">
          <NavMobile />
        </div>
      </div>
    </header>
  );
};

export default Header;
