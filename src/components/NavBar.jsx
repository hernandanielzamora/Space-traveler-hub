import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../media/logo.png';

const NavBar = () => (
  <>
    <nav className="nav-container flex">
      <div className="logo-container flex">
        <img src={logo} alt="Space Travelers Logo" className="navbar-logo" />
        <h1>Space Travelers Hub</h1>
      </div>
      <div className="links-list flex">
        <ul className="flex list">
          <li className="navigation-link">
            <NavLink
              className="list-link"
              activeClassName="active-link"
              to="/"
              end
            >
              Rockets
            </NavLink>
          </li>
          <li className="navigation-link">
            <NavLink
              className="list-link"
              activeClassName="active-link"
              to="/missions"
            >
              Missions
            </NavLink>
          </li>
          <li className="navigation-link">
            <NavLink
              className="list-link"
              activeClassName="active-link"
              to="/profile"
            >
              Profile
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  </>
);

export default NavBar;
