import React from 'react';
import './Footer.css';
import footerLogo from '../../assets/footer-logo.png';

const Footer = () => {
  return (
    <footer>
        <section>
            <img src={footerLogo} alt="footer logo" style={{display: "block"}} />
            <article>
                <h4>Doormat Navigation</h4>
                <nav>
                    <ul>
                        <li><a href="./home">Home</a></li>
                        <li><a href="./about">About</a></li>
                        <li><a href="./menu">Menu</a></li>
                        <li><a href="./reservations">Reservations</a></li>
                        <li><a href="./order-online">Order Online</a></li>
                        <li><a href="./login">Login</a></li>
                    </ul>
                </nav>
            </article>
            <article>
                <h4>Contact</h4>
                <p>Physical Address</p>
                <p>Phone number</p>
                <p><a href="mailto:placeholder@littlelemon.com">Email Address</a></p>
            </article>
            <article>
                <h4>Social Media Links</h4>
                <ul>
                    <li><a href="https://www.facebook.com">Facebook</a></li>
                    <li><a href="https://www.instagram.com">Instagram</a></li>
                    <li><a href="https://wwww.tiktok.com">TikTok</a></li>
                </ul>
            </article>
        </section>
    </footer>
  )
}

export default Footer