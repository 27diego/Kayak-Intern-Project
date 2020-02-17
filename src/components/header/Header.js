import React from "react";
import logo from "../../assets/kayak-logo.svg";
import "./Header.scss";

export default function Header() {
  return (
    <div className="header">
      <img className="header__logo" alt="kayak logo" src={logo} />
      <span className="header__description">Tours</span>
    </div>
  );
}
