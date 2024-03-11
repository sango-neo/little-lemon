import React from 'react';
import { NavLink } from 'react-router-dom';

import './Nav.css';

const Nav = () => {
  return (
    <nav>
        <ul>
            <li><NavLink to="/" className="navlink">Home</NavLink></li>
            <li><NavLink to="/about" className="navlink">About</NavLink></li>
            <li><NavLink to="/menu" className="navlink">Menu</NavLink></li>
            <li><NavLink to="/reservations" className="navlink">Reservations</NavLink></li>
            <li><NavLink to="/order-online" className="navlink">Order Online</NavLink></li>
            <li><NavLink to="/login" className="navlink">Login</NavLink></li>
        </ul>
    </nav>
  )
}

export default Nav