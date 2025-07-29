import React, { useState } from "react";

const UserMenu = () => {
  const [open, setOpen] = useState(false);
  const settings = ["Profile", "Account", "Dashboard", "Logout"];

  return (
    <div className="usermenu-container">
      <button onClick={() => setOpen(!open)} className="usermenu-button">
        <img className="usermenu-avatar" src="./public/vite.svg" alt="avatar" />
      </button>

      {open && (
        <div className="usermenu-dropdown">
          {settings.map((setting) => (
            <div
              key={setting}
              onClick={() => setOpen(false)}
              className="usermenu-item"
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
