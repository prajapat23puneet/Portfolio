import React from 'react';
import './Hero.css';

const Hero = () => {
    return (
        <section id="hero" className="hero-section">
            <div className="container hero-content">
                <h1 className="name">Puneet Prajapat</h1>
                <h2 className="title">Software Development Engineer <span className="text-secondary">|</span> Full Stack & API Development</h2>
                <p className="tagline">
                    Specializing in modernizing legacy systems, API development, and test automation.
                </p>
                <div className="hero-actions">
                    <a href="#about" className="btn">View My Work</a>
                    <div className="social-links">
                        <a href="https://www.linkedin.com/in/puneet-prajapat/" target="_blank" rel="noopener noreferrer" className="social-link">LinkedIn</a>
                        <a href="https://github.com/prajapat23puneet" target="_blank" rel="noopener noreferrer" className="social-link">GitHub</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
