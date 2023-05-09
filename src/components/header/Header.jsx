import React from "react";
import HeaderSocials from "./HeaderSocials";
import "./header.css";

const Header = () => {
  return (
    <header id="home">
      <div className="container header__container">
        <h5>Hello, my dev name is</h5>
        <h1>Miracle</h1>
        <h5 className="text-light">Full Stack & Blockchain Developer</h5>
        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
        <HeaderSocials />
      </div>
    </header>
  );
};

export default Header;
