import React, { useState } from "react";

const MobileMenu = () => {
  const [open, setOpen] = useState(false);
  const pages = ["All", "MyQoutes", "Favorite"];

  return (
    <div className="mobilemenu-container">
      <button className="mobilemenu-button" onClick={() => setOpen(!open)}>
        <svg
          className="mobilemenu-svg"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d={open ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
          />
        </svg>
      </button>

      {open && (
        <div className="mobilemenu-dropdown">
          {pages.map((page) => (
            <div
              key={page}
              className="mobilemenu-item"
              onClick={() => setOpen(false)}
            >
              {page}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MobileMenu;
