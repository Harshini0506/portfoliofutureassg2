import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.css';

function Navigation() {
  return (
    <div className='navbar fixed-top bg-dark text-white'>
      <ul className="nav justify-content-end">
        <li className="nav-item">
          <NavLink className="nav-link fs-5 text-white" to="/home">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link fs-5 text-white" to="/aboutme">About Me</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link fs-5 text-white" to="/certifications">Certifications</NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Navigation;

