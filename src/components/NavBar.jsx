import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../media/logo.png';

const links = [
  { path: '/', text: 'Rockets' },
  { path: 'missions', text: 'Missions' },
  { path: 'profile', text: 'Profile' },
];

const NavBar = () => (
  <>
    <nav className="nav-container flex">
      <div className="logo-container flex">
        <img src={logo} alt="Space Travelers Logo" className="navbar-logo" />
        <h1>Space Travelers Hub</h1>
      </div>
      <div className="links-list flex">
        <ul className="flex list">
          {links.map((link) => (
            <li key={link.text}>
              <NavLink to={link.path}>{link.text}</NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  </>
);

export default NavBar;
