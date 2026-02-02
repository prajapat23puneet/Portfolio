import React, { useState, useEffect } from 'react';
import { emailRateLimiter, isProbablyBot, isHoneypotFilled } from '../utils/security';
import { FaDev, FaXTwitter } from 'react-icons/fa6';
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
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
            )
        },
        {
            name: 'GitHub',
            url: 'https://github.com/prajapat23puneet',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
            )
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
