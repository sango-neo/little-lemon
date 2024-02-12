import React from 'react';
import './Header.css';
import logo from '../../assets/logo.png';

const Header = ({ children }) => {
  return (
    <header>
        <img src={logo} alt="site logo" style={{display: "inline-block"}} width={220}/>
        {children} {/*nav component will be the only child*/} 
    </header>
  )
}

export default Header