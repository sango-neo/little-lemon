import React from 'react';
import { Link } from 'react-router-dom';

import './Nav.css';

const Nav = () => {
  return (
    <nav>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><a href="/#menu">Menu</a></li>
            <li><Link to="/reservations">Reservations</Link></li>
            <li><Link to="/order-online">Order Online</Link></li>
            <li><Link to="/login">Login</Link></li>
        </ul>
    </nav>
  )
}

export default Nav