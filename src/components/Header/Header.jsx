import React from 'react';
import './Header.css';
import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';

const Header = ({ children }) => {
  return (
    <header>
        <Link to="/" style={{margin: '0'}}>
          <img src={logo} alt="site logo" style={{display: "inline-block"}} width={220}/>
        </Link>
        {children} {/*nav component will be the only child*/} 
    </header>
  )
}

export default Header