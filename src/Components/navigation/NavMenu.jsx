import React from "react";

const NavMenu = () => {
  const pages = ["All", "MyQoutes", "Favorite"];

  return (
    <>
      {pages.map((page) => (
        <button key={page} className="nav-button">
          {page}
        </button>
      ))}
    </>
  );
};

export default NavMenu;
