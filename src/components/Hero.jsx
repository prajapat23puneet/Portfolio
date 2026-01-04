import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import './Hero.css';

const avatarDark = "/images/avatar-dark.png";
const avatarLight = "/images/avatar-light.png";
const cardDark = "/images/tech-card-dark.png";
const cardLight = "/images/tech-card-light.png";

const Hero = () => {
    const [theme, setTheme] = useState('dark');

    useEffect(() => {
        const updateTheme = () => {
            const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
            setTheme(currentTheme);
        };

        // Initial check
        updateTheme();

        // Observer for theme changes
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.type === 'attributes' && mutation.attributeName === 'data-theme') {
                    updateTheme();
                }
            });
        });

        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ['data-theme'],
        });

        return () => observer.disconnect();
    }, []);

    const avatar = theme === 'light' ? avatarLight : avatarDark;
    const cardImage = theme === 'light' ? cardLight : cardDark;

    return (
        <section id="hero" className="hero-section">
            <div className="container hero-container">
                <div className="hero-text">
                    <h1 className="name">Hi, I'm <span className="name-gradient">Puneet Prajapat</span></h1>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <h2 className="title">Software Development Engineer</h2>
                    </motion.div>

                    <p className="tagline">
                        Software Development Engineer with expertise in modernizing legacy systems. At Planful Inc, I architected product-wide migrations from ASPX to C# REST services and built performance monitoring tools that enhanced system reliability.
                    </p>
                    <div className="hero-actions">
                        <a href="#projects" className="btn">View Work</a>
                        <a href="#contact" className="btn">Contact Me</a>
                    </div>
                </div>

                <div className="hero-visuals">
                    <div className="hero-image-container">
                        <div
                            className="hero-glass-card"
                            style={{ backgroundImage: `url(${cardImage})` }}
                        ></div>
                        <motion.img
                            src={avatar}
                            fetchPriority="high"
                            alt="Puneet Prajapat Avatar"
                            className="hero-avatar"
                            animate={{
                                y: [0, -20, 0],
                            }}
                            transition={{
                                duration: 6,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                            whileHover={{ scale: 1.05 }}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
