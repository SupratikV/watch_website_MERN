import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import '../mediaQueries/mediaQueries.css';

const Footer = () => {
  return (
    <footer>
      <div className="col address">
        <img className="logo" src="../img/logo.png" alt="" />
        <h4>Contact</h4>
        <p>
          <strong>Address:</strong> 100 Feet Ring Road, Banashankari Stage III,
          Dwaraka Nagar, Banashankari, Bengaluru, Karnataka 560085
        </p>
        <p>
          <strong>Phone:</strong> 80102 97297
        </p>
        <p>
          <strong>Hours:</strong> 10:00 - 17:00 Mon - Fri
        </p>

        <div className="follow">
          <h4>Follow Us</h4>
          <div className="icon">
            <i className="fab fa-facebook-f"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-pinterest-p"></i>
            <i className="fab fa-youtube"></i>
          </div>
        </div>
      </div>

      <div className="col">
        <h4>About</h4>
        <Link to="/about">About us</Link>
        <Link to="/contact">Contact us</Link>
      </div>

      <div className="col">
        <h4>My Account</h4>
        <Link to="/login">Sign In</Link>
        <Link to="/cart">View Cart</Link>
      </div>

      <div className="col install">
        <h4>Install App</h4>
        <p>From App Store or Google play</p>
        <div className="row">
          <img src="../img/pay/app.jpg" alt="" />
          <img src="../img/pay/play.jpg" alt="" />
        </div>
        <p>Secure Payment Gateways</p>
        <img src="../img/pay/pay.png" alt="" />
      </div>

      <div className="copywrite">
        <p>© 2022, EStore - HTML CSS JS </p>
      </div>
    </footer>
  );
};

export default Footer;
