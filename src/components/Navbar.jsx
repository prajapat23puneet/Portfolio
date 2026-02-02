import React, { useState, useEffect, useRef } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { FiMenu, FiX, FiSun, FiMoon } from 'react-icons/fi';
import './Navbar.css';

const RESUME_LINK = "https://drive.google.com/file/d/1TO6iYI4ZmHtLO-G6hTCsJdTZB8tHgx2a/view?usp=sharing";

const Navbar = () => {
    const { theme, toggleTheme } = useTheme();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const navRef = useRef(null);

    // Scroll Effect
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu when clicking outside the navbar / menu
    useEffect(() => {
        if (!isMenuOpen) return;

        const handleClickOutside = (event) => {
            if (navRef.current && !navRef.current.contains(event.target)) {
                setIsMenuOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        document.addEventListener('touchstart', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.removeEventListener('touchstart', handleClickOutside);
        };
    }, [isMenuOpen]);

    const navLinks = [
        { name: 'About', href: '#' },
        { name: 'Experience', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' },
    ];

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const closeMenu = () => setIsMenuOpen(false);

    const handleNavClick = (e, href) => {
        e.preventDefault();
        closeMenu(); // Close mobile menu if open

        if (href === '#') {
            // Scroll to top
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
            return;
        }

        const targetId = href.substring(1); // Remove the #
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            const currentScroll = window.scrollY;
            const targetScroll = targetElement.offsetTop;
            const scrollDirection = targetScroll > currentScroll ? 'down' : 'up';

            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    };

    return (
        <nav ref={navRef} className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="navbar-container">
                <div className="logo">
                    <a href="#" onClick={(e) => handleNavClick(e, '#')}>Puneet Prajapat</a>
                </div>

                {/* Desktop Menu */}
                <div className="nav-desktop">
                    <ul className="nav-links">
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <a href={link.href} onClick={(e) => handleNavClick(e, link.href)}>{link.name}</a>
                            </li>
                        ))}
                    </ul>
                    <a
                        href={RESUME_LINK}
                        className="btn resume-btn"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Resume
                    </a>
                    <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle Theme">
                        {theme === 'dark' ? (
                            <FiSun size={20} />
                        ) : (
                            <FiMoon size={20} />
                        )}
                    </button>
                </div>

                {/* Mobile Menu Actions */}
                <div className="nav-mobile-actions">
                    <button className="theme-toggle mobile-toggle" onClick={toggleTheme} aria-label="Toggle Theme">
                        {theme === 'dark' ? (
                            <FiSun size={20} />
                        ) : (
                            <FiMoon size={20} />
                        )}
                    </button>
                    <button className="hamburger" onClick={toggleMenu} aria-label="Menu">
                        {isMenuOpen ? (
                            <FiX size={24} />
                        ) : (
                            <FiMenu size={24} />
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Dropdown */}
            <div className={`mobile-menu glass ${isMenuOpen ? 'open' : ''}`}>
                <ul className="mobile-nav-links">
                    {navLinks.map((link) => (
                        <li key={link.name}>
                            <a href={link.href} onClick={(e) => handleNavClick(e, link.href)}>{link.name}</a>
                        </li>
                    ))}
                    <li>
                        <a
                            href={RESUME_LINK}
                            className="btn mobile-resume-btn"
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={closeMenu}
                        >
                            Resume
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
