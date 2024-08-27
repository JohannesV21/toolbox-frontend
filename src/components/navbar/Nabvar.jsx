import React from "react";
import "./navbar.scss";

export const Nabvar = () => {
  return (
    <div className="navbar-container">
      <div className="navbar-content d-flex justify-content-between align-items-center">
        <img
          src="https://files.toolboxtve.com/wp-content/uploads/2018/03/15145223/logo.png"
          alt="Toolbox logo"
          width="150px"
        />
        <h1>React Test App</h1>
      </div>
    </div>
  );
};
