import React from 'react';
import '../styles/Footer.css'; // Import your CSS file for styling

function Footer() {
    return (
        <footer >
            <div className="footer-content">
                <div className="footer-section contact">
                    <h3>Contact Us</h3>
                    <p>
                        Address: Debre Birhan, Ethiopia <br />
                        Phone: +251 956 319 463 <br />
                        Email: hailegetaneh1221@gmail.com
                    </p>
                </div>
                <div className="footer-section links">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/about">About Us</a></li>
                        <li><a href="/services">Services</a></li>
                        <li><a href="/destinations">Destinations</a></li>
                        <li><a href="/contact">Contact</a></li>
                    </ul>
                </div>
                <div className="footer-section social">
                    <h3>Follow Us</h3>
                    <div className="social-links">
                        <a href="#"><i className="fab fa-facebook"></i></a>
                        <a href="#"><i className="fab fa-twitter"></i></a>
                        <a href="#"><i className="fab fa-instagram"></i></a>

                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2024 WanderEthio - All rights reserved</p>
            </div>
        </footer>
    );
}

export default Footer;
