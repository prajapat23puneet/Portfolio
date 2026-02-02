import React, { useState, useEffect } from 'react';
import { emailRateLimiter, isProbablyBot, isHoneypotFilled } from '../utils/security';
import { FaDev, FaXTwitter, FaLinkedin, FaGithub } from 'react-icons/fa6';
import './Contact.css';

const Contact = () => {
    const [email, setEmail] = useState('');
    const [honeypot, setHoneypot] = useState('');
    const [isBlocked, setIsBlocked] = useState(false);
    const [cooldownTime, setCooldownTime] = useState(0);

    useEffect(() => {
        // Decode email on client side only
        const encoded = 'cHVuZWV0Y29kZXNAZ21haWwuY29t';
        const decoded = atob(encoded);
        setEmail(decoded);

        // Check for bot behavior
        if (isProbablyBot()) {
            console.warn('Bot detected');
            setIsBlocked(true);
        }
    }, []);

    useEffect(() => {
        if (cooldownTime > 0) {
            const timer = setTimeout(() => {
                setCooldownTime(cooldownTime - 1);
                if (cooldownTime === 1) {
                    setIsBlocked(false);
                }
            }, 1000);
            return () => clearTimeout(timer);
        }
    }, [cooldownTime]);

    const handleContactClick = (e) => {
        // Check honeypot (hidden field that bots might fill)
        if (isHoneypotFilled(honeypot)) {
            e.preventDefault();
            console.warn('Honeypot triggered - likely bot');
            return;
        }

        // Rate limiting
        const userKey = `contact_${Date.now()}`;
        if (!emailRateLimiter.isAllowed(userKey)) {
            e.preventDefault();
            setIsBlocked(true);
            setCooldownTime(60);
            alert('Please wait a moment before trying again.');
            return;
        }
    };

    const mailtoLink = email ? `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}` : '#';

    // Social links - UPDATE THESE WITH YOUR ACTUAL URLs
    const socialLinks = [
        {
            name: 'LinkedIn',
            url: 'https://www.linkedin.com/in/puneet-prajapat',
            icon: <FaLinkedin size={24} />
        },
        {
            name: 'GitHub',
            url: 'https://github.com/prajapat23puneet',
            icon: <FaGithub size={24} />
        },
        {
            name: 'Dev.to',
            url: 'https://dev.to/puneet_codes',
            icon: <FaDev size={24} />
        },
        {
            name: 'X',
            url: 'https://x.com/Puneet_codes',
            icon: <FaXTwitter size={24} />
        }
    ];

    return (
        <footer id="contact" className="contact-section">
            <div className="container">
                <div className="contact-content glass">
                    <h2 className="section-title">Get In Touch</h2>
                    <p className="contact-text">
                        I'm currently looking for new opportunities. Whether you have a question or just want to say hi, my inbox is always open!
                    </p>

                    {/* Honeypot field - hidden from users, visible to bots */}
                    <input
                        type="text"
                        name="website"
                        value={honeypot}
                        onChange={(e) => setHoneypot(e.target.value)}
                        style={{
                            position: 'absolute',
                            left: '-9999px',
                            width: '1px',
                            height: '1px',
                            opacity: 0,
                            pointerEvents: 'none'
                        }}
                        tabIndex="-1"
                        autoComplete="off"
                        aria-hidden="true"
                    />

                    <a
                        href={mailtoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`btn contact-btn ${isBlocked ? 'disabled' : ''}`}
                        onClick={handleContactClick}
                    >
                        {isBlocked ? `Wait ${cooldownTime}s` : 'Say Hello'}
                    </a>

                    {/* Social Links */}
                    <div className="social-links">
                        {socialLinks.map((social) => (
                            <a
                                key={social.name}
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="social-link"
                                aria-label={social.name}
                            >
                                {social.icon}
                            </a>
                        ))}
                    </div>
                </div>
                <div className="footer-bottom glass">
                    <p>© {new Date().getFullYear()} Puneet Prajapat. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Contact;
