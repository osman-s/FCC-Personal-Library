import React from "react";
import { Link, NavLink } from "react-router-dom";

const NavBar = ({ user }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        <div className="bookss">
          <i className="fas fa-book"></i> Personal Library
        </div>
      </Link>
      <div className="" id="navbarNavAltMarkup">
      {/* <div className="collapse navbar-collapse" id="navbarNavAltMarkup"> */}
        <div className="navbar-nav">
          <NavLink className="nav-item nav-link" to="/home">
            Home
          </NavLink>
          <NavLink className="nav-item nav-link" to="/projectissues">
            Project Issues
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
