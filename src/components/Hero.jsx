import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';
import './Hero.css';

const avatarDark = "/images/avatar-dark.webp";
const avatarLight = "/images/avatar-light.webp";
const cardDark = "/images/tech-card-dark.webp";
const cardLight = "/images/tech-card-light.webp";
const RESUME_LINK = "https://drive.google.com/file/d/1TO6iYI4ZmHtLO-G6hTCsJdTZB8tHgx2a/view?usp=sharing";

const Hero = () => {
    const { theme } = useTheme();

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
                        <a
                            href={RESUME_LINK}
                            className="btn"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Resume
                        </a>
                        <a href="#contact" className="btn">Contact Me</a>
                    </div>
                </div>

                <div className="hero-visuals">
                    <div className="hero-image-container">
                        <div
                            className="hero-glass-card glass"
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
