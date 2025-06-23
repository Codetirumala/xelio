import React, { useState, useEffect } from 'react';
import './Navbar.css';
import logo from './images/logo (1).png';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState('');

    const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 50) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const toggleDropdown = (dropdownName) => {
        if (window.innerWidth < 960) {
            if (activeDropdown === dropdownName) {
                setActiveDropdown('');
            } else {
                setActiveDropdown(dropdownName);
            }
        }
    };

    return (
        <nav className={scrolled ? 'navbar scrolled' : 'navbar'}>
            <div className="navbar-container">
                <a href="/" className="navbar-logo">
                    <img src={logo} alt="Xolio Logo" />
                </a>
                <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
                <i
  className={isOpen ? 'fas fa-times' : 'fas fa-bars'}
  style={{ color: 'orange' }}
></i>

                </div>
                <ul className={isOpen ? 'nav-menu active' : 'nav-menu'}>
                    <li className="nav-item">
                        <a href="/" className="nav-links active-link">Home</a>
                    </li>
                    <li className="nav-item">
                        <a href="/about" className="nav-links">About Us</a>
                    </li>
                    <li className={`nav-item dropdown ${activeDropdown === 'pages' ? 'active' : ''}`} onClick={() => toggleDropdown('pages')}>
                        <a href="#pages" className="nav-links">Pages <i className="fas fa-caret-down" /></a>
                        <div className="dropdown-menu">
                            <a href="/about-me">About Me</a>
                            <a href="/team">Team Page</a>
                            <a href="/team-details">Team Details</a>
                            <a href="/portfolio-details">Portfolio Details</a>
                            <a href="/services-details">Services Details</a>
                            <a href="/contact">Contact Us</a>
                        </div>
                    </li>
                    <li className={`nav-item dropdown ${activeDropdown === 'news' ? 'active' : ''}`} onClick={() => toggleDropdown('news')}>
                        <a href="#news" className="nav-links">News <i className="fas fa-caret-down" /></a>
                        <div className="dropdown-menu">
                            <a href="/blog">Our Blog</a>
                            <a href="/blog-details">Blog Details</a>
                        </div>
                    </li>
                </ul>
                <a href="/contact" className="contact-btn">Contact Us</a>
            </div>
        </nav>
    );
};

export default Navbar; 