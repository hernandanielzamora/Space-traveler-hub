import React from "react";
import logo from "../media/logo.png";
import { Link } from "react-router-dom";
import Profile from "./Profile";

const NavBar = () => (
  <>
    <nav className="nav-container flex">
      <div className="logo-container flex">
        <img src={logo} alt="Space Travelers Logo" className="navbar-logo" />
        <h1>Space Travelers Hub</h1>
      </div>
      <div className="links-list flex">
        <ul className="flex list">
          <li>Rockets</li>
          <li>Missions</li>
          <li>
            <Link to={Profile}>My Profile</Link>
          </li>
        </ul>
      </div>
    </nav>
  </>
);

export default NavBar;
