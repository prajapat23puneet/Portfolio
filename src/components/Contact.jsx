import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <footer id="contact" className="contact-section">
            <div className="container contact-content">
                <h2 className="section-title">Get In Touch</h2>
                <p className="contact-text">
                    I'm currently looking for new opportunities. Whether you have a question or just want to say hi, my inbox is always open!
                </p>
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=Punittheprajapat@gmail.com" target="_blank" rel="noopener noreferrer" className="btn contact-btn">Say Hello</a>
                <div className="footer-bottom">
                    <p>© {new Date().getFullYear()} Puneet Prajapat. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Contact;
