import React from "react";
import "../../styles/Header.css";
import logoPath from "../../assets/logo.png";

const Header = () => {
  return (
    <header className="header">
      <div className="logo-block">
        <img className="logo" src={logoPath}></img>
      </div>
    </header>
  );
};

export default Header;
