import React from "react";
import Logo from "./Logo";
import NavMenu from "./NavMenu";
import MobileMenu from "./MobileMenu";
import UserMenu from "./UserMenu";

const AppHeader = () => {
  return (
    <header className="bg-blue-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="hidden md:flex items-center space-x-2">
              <Logo />
            </div>
            <div className="md:hidden">
              <MobileMenu />
            </div>
          </div>
          <div className="hidden md:flex space-x-6">
            <NavMenu />
          </div>
          <div className="flex items-center">
            <UserMenu />
          </div>
        </div>
      </div>
    </header>
  );
};

export default AppHeader;
