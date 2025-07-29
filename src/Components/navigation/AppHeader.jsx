import React from "react";
import Logo from "./Logo";
import NavMenu from "./NavMenu";
import MobileMenu from "./MobileMenu";
import UserMenu from "./UserMenu";
import "./navigation.css";

const AppHeader = () => {
  return (
    <>
      <nav className="navigation-container">
        <div className="logo-container">
          <Logo />
        </div>
        <div className="navigation-menu">
          <NavMenu />
        </div>
        <div>
          <UserMenu />
        </div>
      </nav>
    </>
  );
};
export default AppHeader;
