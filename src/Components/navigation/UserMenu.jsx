import React, { useState } from "react";

const UserMenu = () => {
  const [open, setOpen] = useState(false);
  const settings = ["Profile", "Account", "Dashboard", "Logout"];

  return (
    <div className="relative">
      <button onClick={() => setOpen(!open)} className="focus:outline-none">
        <img
          className="w-8 h-8 rounded-full border border-white"
          src="https://via.placeholder.com/40"
          alt="avatar"
        />
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-48 bg-white text-black rounded-md shadow-lg z-10">
          {settings.map((setting) => (
            <div
              key={setting}
              onClick={() => setOpen(false)}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm text-center"
            >
              {setting}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default UserMenu;
