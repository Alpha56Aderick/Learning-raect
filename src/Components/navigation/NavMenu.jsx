import React from "react";

const NavMenu = () => {
  const pages = ["All", "MyQoutes", "Favorite"];

  return (
    <>
      {pages.map((page) => (
        <button
          key={page}
          className="text-white hover:text-gray-200 transition-colors duration-200 font-medium"
        >
          {page}
        </button>
      ))}
    </>
  );
};

export default NavMenu;
