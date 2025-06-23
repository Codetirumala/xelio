import React from 'react';
import './Footer.css';

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

const Footer = () => (
  <footer className="footer-section">
    <div className="footer-main">
      <div className="footer-col footer-brand">
        <div className="footer-logo-row">
          <img src={require('./images/w_logo.png')} alt="xolio logo" className="footer-logo" />
        </div>
        <div className="footer-social-row">
          <a href="#" className="footer-social"><i className="fab fa-facebook-f" /></a>
          <a href="#" className="footer-social"><i className="fab fa-twitter" /></a>
          <a href="#" className="footer-social"><i className="fab fa-google-plus-g" /></a>
          <a href="#" className="footer-social"><i className="fab fa-linkedin-in" /></a>
        </div>
        <div className="footer-support-label">For Support</div>
        <div className="footer-support-phone">0123 - 567 - 7650</div>
      </div>
      <div className="footer-col footer-links">
        <div className="footer-col-title">Primary Pages</div>
        <ul className="footer-list">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Service</li>
        </ul>
      </div>
      <div className="footer-col footer-links">
        <div className="footer-col-title">Pages</div>
        <ul className="footer-list">
          <li>About</li>
          <li>Pricing</li>
          <li>Contact</li>
          <li>Request for Demo</li>
        </ul>
      </div>
      <div className="footer-col footer-contact">
        <div className="footer-col-title">About Store</div>
        <ul className="footer-contact-list">
          <li><span className="footer-icon footer-phone" /> 8 (495) 989—20—11</li>
          <li><span className="footer-icon footer-mail" /> company@gmail.com</li>
          <li><span className="footer-icon footer-location" /> Ranelagh Place, Liverpool, L3 5UL, England</li>
        </ul>
      </div>
    </div>
    <div className="footer-bottom">
      <div className="footer-payments">
        <img src={require('./images/cart_img.png')} alt="PayPal" className="footer-payment-img" />
      </div>
      <div className="footer-copyright">
        © 2023 xilio. All Rights Reserved
      </div>
      
    </div>
  </footer>
);

export default Footer; 