import React from 'react';
import { motion } from 'framer-motion';
import './AvailabilityBanner.css';

const AvailabilityBanner = () => {
    return (
        <motion.section
            id="availability"
            className="availability-section"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
        >
            <div className="container">
                <div className="availability-banner glass">
                    {/* Status Indicator */}
                    <div className="availability-status">
                        <div className="status-pulse">
                            <div className="pulse-ring"></div>
                            <div className="pulse-dot"></div>
                        </div>
                        <div className="status-text">
                            <span className="status-label">Available Now</span>
                            <span className="status-detail">Immediate Joiner • Zero Notice Period</span>
                        </div>
                    </div>

                    {/* Location Preferences */}
                    <div className="location-preferences">
                        <h3 className="section-subtitle">Open to:</h3>
                        <div className="location-grid">
                            <div className="location-item">
                                <span className="location-flag">🇮🇳</span>
                                <span className="location-text">India (Bangalore, Hyderabad, Pune, NCR)</span>
                            </div>
                            <div className="location-item">
                                <span className="location-flag">🇦🇪</span>
                                <span className="location-text">Dubai/UAE (Visa Sponsorship Required)</span>
                            </div>
                            <div className="location-item">
                                <span className="location-flag">🌐</span>
                                <span className="location-text">Remote (APAC/MENA Region)</span>
                            </div>
                        </div>
                    </div>

                    {/* Compensation Expectations */}
                    <div className="compensation-section">
                        <h3 className="section-subtitle">Compensation Expectations:</h3>
                        <div className="compensation-grid">
                            <div className="compensation-item">
                                <span className="region-label">India</span>
                                <span className="amount">₹15-18 LPA</span>
                                <span className="detail">(₹12-16 LPA base in-hand preferred)</span>
                            </div>
                            <div className="compensation-divider">•</div>
                            <div className="compensation-item">
                                <span className="region-label">Dubai/UAE</span>
                                <span className="amount">15,000-18,000 AED/month</span>
                            </div>
                            <div className="compensation-divider">•</div>
                            <div className="compensation-item">
                                <span className="region-label">Remote</span>
                                <span className="amount">Market Rate</span>
                                <span className="detail">(APAC/MENA aligned)</span>
                            </div>
                        </div>
                    </div>

                    {/* Quick CTA */}
                    <div className="cta-section">
                        <a href="#contact" className="btn availability-cta">
                            Let's Connect
                        </a>
                        <span className="response-time">Typically respond within 24 hours</span>
                    </div>
                </div>
            </div>
        </motion.section>
    );
};

export default AvailabilityBanner;
