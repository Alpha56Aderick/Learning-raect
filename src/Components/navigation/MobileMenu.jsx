import React, { useState } from "react";

const MobileMenu = () => {
  const [open, setOpen] = useState(false);
  const pages = ["All", "MyQoutes", "Favorite"];

  return (
    <div className="relative">
      <button
        className="text-white focus:outline-none"
        onClick={() => setOpen(!open)}
      >
        <svg
          className="w-6 h-6"
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
        <div className="absolute top-10 left-0 bg-white text-black w-40 rounded shadow-md z-10">
          {pages.map((page) => (
            <div
              key={page}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
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
