import React, { useState, useEffect } from 'react';
import './Contact.css';

const Contact = () => {
    // Obfuscated email - simple encoding to prevent bot scraping
    const [email, setEmail] = useState('');
    
    useEffect(() => {
        // Decode email on client side only
        const encoded = 'cHVuZWV0Y29kZXNAZ21haWwuY29t'; // base64 encoded
        const decoded = atob(encoded);
        setEmail(decoded);
    }, []);

    const mailtoLink = email ? `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}` : '#';

    return (
        <footer id="contact" className="contact-section">
            <div className="container">
                <div className="contact-content glass">
                    <h2 className="section-title">Get In Touch</h2>
                    <p className="contact-text">
                        I'm currently looking for new opportunities. Whether you have a question or just want to say hi, my inbox is always open!
                    </p>
                    <a href={mailtoLink} target="_blank" rel="noopener noreferrer" className="btn contact-btn">Say Hello</a>
                </div>
                <div className="footer-bottom glass">
                    <p>© {new Date().getFullYear()} Puneet Prajapat. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Contact;
